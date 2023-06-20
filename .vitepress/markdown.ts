import MarkdownIt from "markdown-it";

export default function configureMarkdown(md: MarkdownIt) {
  renderText(md);
  renderVoice(md);
  renderTooltip(md);
  renderContext(md);
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

function renderContext(md: MarkdownIt) {
  md.renderer.rules.table_open = function (tokens, idx, options, _, self) {
    if (!tokens[idx].attrGet("class")?.includes("context")) {
      return self.renderToken(tokens, idx, options);
    }
    const table = tokens.slice(
      idx,
      idx + tokens.slice(idx).findIndex((t) => t.type === "table_close")
    );
    table[0].attrJoin("class", "hid");
    const content = parseTable(md, table);

    const flags = content[0].splice(1);
    const segments = content.splice(1).map(([h, ...t]) => {
      if (h) return [h];
      if (t.some((v) => v)) return t;
      return ["&nbsp;"];
    });
    const types = JSON.stringify(segments.map((s) => s.length === 1));

    return (
      `<p><Context :flags="${flags.length}" :types="${types}">` +
      flags.map((f, i) => `<template #f-${i}>${f}</template>`).join("") +
      segments
        .flatMap((vs, i) =>
          vs.map((v, j) => `<template #s-${i}-${j}>${v}</template>`)
        )
        .join("") +
      "</Context></p>" +
      self.renderToken(tokens, idx, options)
    );
  };
}

function renderPhrase(md: MarkdownIt) {
  md.renderer.rules.table_open = function (tokens, idx, options, _, self) {
    if (!tokens[idx].attrGet("class")?.includes("phrase")) {
      return self.renderToken(tokens, idx, options);
    }
    const table = tokens.slice(
      idx,
      idx + tokens.slice(idx).findIndex((t) => t.type === "table_close")
    );
    table[0].attrJoin("class", "hid");
    const segments = parseTable(md, table).splice(1);

    return (
      "<p>" +
      segments
        .map(
          ([url, c, cap]) =>
            `<Phrase><template #voice><Voice><source src=${url}></Voice></template>${c}<template #caption>${cap}</template></Phrase>`
        )
        .join("") +
      "</p>" +
      self.renderToken(tokens, idx, options)
    );
  };
}

function renderVoice(md: MarkdownIt) {
  const mreg = require("markdown-it-regexp");
  md.use(
    mreg(/~\[(.+?)\]\((.+?)\)/, ([, cont, url]) => {
      return `<Voice><source src="${url}">${rd(cont, md)}</Voice>`;
    })
  );
}

function renderText(md: MarkdownIt) {
  const mreg = require("markdown-it-regexp");
  md.use(
    mreg(/==(.+?)==/, ([, cont]) => `<span class="b">${rd(cont, md)}</span>`)
  );
  md.use(
    mreg(/--(.+?)--/, ([, cont]) => `<span class="b s">${rd(cont, md)}</span>`)
  );
}

function renderTooltip(md: MarkdownIt) {
  const mreg = require("markdown-it-regexp");
  md.use(
    mreg(/\#\<(.+?)\|(.+?)\>/, ([, cont, hint]) => {
      return (
        `<Tooltip>` +
        rd(cont, md) +
        "<template #content>" +
        rd(hint, md) +
        "</template>" +
        "</Tooltip>"
      );
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
