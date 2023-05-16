import MarkdownIt from "markdown-it";

export default function configureMarkdown(md: MarkdownIt) {
  renderSample(md);
  renderPhrase(md);

  md.use(require("markdown-it-attrs"));
  md.use(require("markdown-it-bracketed-spans"));
}

function rd(s: string, md: MarkdownIt) {
  s = md.render(s);
  const pf = "<p>";
  if (s.startsWith(pf)) s = s.substring(pf.length);
  const sf = "</p>\n";
  if (s.endsWith(sf)) s = s.substring(0, s.length - sf.length);
  return s;
}

function renderPhrase(md: MarkdownIt) {
  md.renderer.rules.table_open = function (tokens, idx, options, _, self) {
    const table = tokens.slice(
      idx,
      idx + tokens.slice(idx).findIndex((t) => t.type === "table_close")
    );
    const isPh = table[0].attrGet("class")?.includes("ph");
    let html = "";
    if (isPh) {
      table[0].attrJoin("class", "hid");
      const content = parseTable(md, table);
      const flags = content[0].splice(1);
      const segments = content.splice(1);

      const segmentsProp = JSON.stringify(segments.map((s) => !!s[0]));
      const templates =
        flags.map((f, i) => `<template #f-${i}>${f}</template>`).join("") +
        segments
          .flatMap((_, i) =>
            _.map((s, j) => `<template #s-${i}-${j}>${s}</template>`)
          )
          .join("");

      html =
        `<p><Phrase :flags="${flags.length}" :segments="${segmentsProp}">` +
        templates +
        "</Phrase></p>";
    }
    return html + self.renderToken(tokens, idx, options);
  };
}

function renderSample(md: MarkdownIt) {
  const mreg = require("markdown-it-regexp");
  md.use(
    mreg(/\#\[(.+?)\](\(.+?\))?/, (match) => {
      const [, content, url] = match;
      let html = "";
      if (content.includes("|")) {
        const [c, ...h] = content.split("|");
        html =
          `<Word>` +
          rd(c, md) +
          "<template #content>" +
          rd(h.join("|"), md) +
          "</template>" +
          "</Word>";
      } else html = rd(content, md);
      if (url) {
        const u = url.substring(1, url.length - 1);
        html = `<Say url="${u}">${html}</Say>`;
      }
      return html;
    })
  );
}

function parseTable(md: MarkdownIt, tokens: any[]) {
  const rs: string[][] = [];
  for (const t of tokens) {
    if (t.type === "tr_open") {
      rs.push([]);
    } else if (t.type === "inline") {
      let c = rd(t.content, md);
      rs[rs.length - 1].push(c);
    }
  }
  return rs;
}
