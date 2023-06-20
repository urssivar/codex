import MarkdownIt from "markdown-it";
import { renderTables } from "./tables";
import { rd } from "./util";

export default function configureMarkdown(md: MarkdownIt) {
  renderText(md);
  renderVoice(md);
  renderTooltip(md);
  renderTables(md);

  md.use(require("markdown-it-attrs"));
  md.use(require("markdown-it-bracketed-spans"));
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
