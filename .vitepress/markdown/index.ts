import MarkdownIt from "markdown-it";
import MdAttrs from "markdown-it-attrs";
import MdSpans from "markdown-it-bracketed-spans";
import MdReg from "markdown-it-regexp";
import MdMTables from "markdown-it-multimd-table";
import { renderTables } from "./tables";
import { rd } from "./util";

export default function configureMarkdown(md: MarkdownIt) {
  renderText(md);
  renderVoice(md);
  renderTooltip(md);
  renderTables(md);

  md.use(MdAttrs);
  md.use(MdSpans);
  md.use(MdMTables, {
    multiline: true,
    rowspan: true,
    headerless: true,
    multibody: true,
    aotolabel: true,
  });
}

function renderVoice(md: MarkdownIt) {
  md.use(
    MdReg(/~\[(.+?)\]\((.+?)\)/, ([, cont, url]) => {
      return `<Voice><source src="${url}">${rd(cont, md)}</Voice>`;
    })
  );
}

function renderText(md: MarkdownIt) {
  md.use(
    MdReg(
      /==(.+?)==/,
      ([, cont]) => `<span class="lang notranslate">${rd(cont, md)}</span>`
    )
  );
  md.use(
    MdReg(
      /--(.+?)--/,
      ([, cont]) => `<span class="gloss">${rd(cont, md)}</span>`
    )
  );
}

function renderTooltip(md: MarkdownIt) {
  md.use(
    MdReg(/\#\<(.+?)\|(.+?)\>/, ([, cont, hint]) => {
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
