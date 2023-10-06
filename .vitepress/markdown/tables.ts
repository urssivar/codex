import MarkdownIt from "markdown-it";
import Token from "markdown-it/lib/token";
import { rd } from "./util";

export function renderTables(md: MarkdownIt) {
  md.renderer.rules.table_open = function (tokens, idx, options, _, self) {
    const classes = (tokens[idx].attrGet("class") as any) ?? [];
    let res = "";
    if (classes.includes("context")) {
      res = renderContext(md, tokens, idx);
    }
    return res + self.renderToken(tokens, idx, options);
  };
}

function renderContext(md: MarkdownIt, tokens: Token[], idx: any) {
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
    "</Context></p>"
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
