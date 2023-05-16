import MarkdownIt from "markdown-it";

export default function configureMarkdown(md: MarkdownIt) {
  parseSample(md);
  phraseTable(md);

  md.use(require("markdown-it-attrs"));
  md.use(require("markdown-it-bracketed-spans"));
}

function rend(s: string, md: MarkdownIt) {
  s = md.render(s);
  const pf = "<p>";
  if (s.startsWith(pf)) s = s.substring(pf.length);
  const sf = "</p>\n";
  if (s.endsWith(sf)) s = s.substring(0, s.length - sf.length);
  return s;
}

function phraseTable(md: MarkdownIt) {
  const cont = require("markdown-it-container");
  md.use(cont, "phrase", {
    validate: function (params) {
      return params.trim().match(/^phrase/);
    },
    render: function (tokens, idx) {
      if (tokens[idx].nesting !== 1) return "-->\n";

      const sidx = tokens.slice(idx).findIndex((t) => t.type === "table_open");
      const eidx = tokens.slice(idx).findIndex((t) => t.type === "table_close");
      const table = parseTable(md, tokens.slice(idx + sidx, idx + eidx));
      const flags = table[0].splice(1);
      const segments = table.splice(1);
      const flagTs = flags
        .map((f, i) => `<template #f-${i}>${f}</template>`)
        .join("\n");
      const segmentTs: string[] = [];
      for (let i = 0; i < segments.length; i++) {
        for (let j = 0; j < segments[i].length; j++) {
          const s = segments[i][j];
          if (s) segmentTs.push(`<template #s-${i}-${j}>${s}</template>`);
        }
      }

      const segmPar = segments.map((s) => !!s[0]);
      return (
        `<Phrase :flags="${flags.length}" :segments="${JSON.stringify(
          segmPar
        )}">` +
        flagTs +
        segmentTs +
        "</Phrase>\n<!--"
      );
    },
  });
}

function parseSample(md: MarkdownIt) {
  const mreg = require("markdown-it-regexp");
  md.use(
    mreg(/\#\[(.+?)\](\(.+?\))?/, (match) => {
      const [, content, url] = match;
      let html = "";
      if (content.includes("|")) {
        const [c, ...h] = content.split("|");
        html =
          `<Word>` +
          rend(c, md) +
          "<template #content>" +
          rend(h.join("|"), md) +
          "</template>" +
          "</Word>";
      } else html = rend(content, md);
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
      let c = rend(t.content, md);
      rs[rs.length - 1].push(c);
    }
  }
  return rs;
}
