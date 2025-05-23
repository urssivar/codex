import MarkdownIt from "markdown-it";
import MdAttrs from "markdown-it-attrs";
import MdSpans from "markdown-it-bracketed-spans";
import MdReg from "markdown-it-regexp";
import MdMTables from "markdown-it-multimd-table";
import { span } from "./utils";

export default function configureMarkdown(md: MarkdownIt) {
  renderText(md);
  renderTooltip(md);
  renderVoice(md);

  md.use(MdAttrs);
  md.use(MdSpans);
  md.use(MdMTables, {
    rowspan: true,
    // headerless: true,
  });
}

function renderText(md: MarkdownIt) {
  md.use(
    MdReg(/==(.+?)==/, ([, cont]) =>
      span(md.renderInline(cont), {
        class: "hl",
      })
    )
  );
  md.use(
    MdReg(/\+\+(.+?)\+\+/, ([, cont]) =>
      span(md.renderInline(cont), {
        class: "lang notranslate",
      })
    )
  );
  md.use(
    MdReg(/--(.+?)--/, ([, cont]) =>
      span(md.renderInline(cont), {
        class: "gloss",
      })
    )
  );
}

function renderTooltip(md: MarkdownIt) {
  md.use(
    MdReg(
      /\^\[(.*?)\]\((.+?)\)/,
      ([, cont, hint]) =>
        '<VTooltip theme="hint">' +
        span(md.renderInline(cont)) +
        "<template v-slot:popper>" +
        md.renderInline(hint) +
        "</template></VTooltip>"
    )
  );
}

function renderVoice(md: MarkdownIt) {
  md.use(
    MdReg(/~\[(.*?)\]\((.+?)\)/, ([, cont, url]) => {
      return `<Voice><source src="${url}">${
        (cont ? " " : "") + md.renderInline(cont)
      }</Voice>`;
    })
  );
}
