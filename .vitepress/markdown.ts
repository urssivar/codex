import MarkdownIt from "markdown-it";

export default function configureMarkdown(md: MarkdownIt) {
  handleHints(md);
  handleAudios(md);
  handleTable(md);

  md.use(require("markdown-it-attrs"));
  md.use(require("markdown-it-bracketed-spans"));
}

function handleTable(md: MarkdownIt) {
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

function handleHints(md: MarkdownIt) {
  const mreg = require("markdown-it-regexp");
  md.use(
    mreg(/\[(.+?)\|(.+?)\]/, (match) => {
      const [, c, h] = match;
      return `<Word h="${h}">${rend(c, md)}</Word>`;
    })
  );
}

function handleAudios(md: MarkdownIt) {
  const mreg = require("markdown-it-regexp");
  md.use(
    mreg(/\#\[(.+)\]\((.+)\)/, (match) => {
      const [, c, u] = match;
      return `<Say url="${u}">${rend(c, md)}</Say>`;
    })
  );
}

function rend(s: string, md: MarkdownIt) {
  s = md.render(s);
  const pf = "<p>";
  if (s.startsWith(pf)) s = s.substring(pf.length);
  const sf = "</p>\n";
  if (s.endsWith(sf)) s = s.substring(0, s.length - sf.length);
  return s;
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
