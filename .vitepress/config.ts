import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import path from "path";
import { telegramSvg } from "./icons";
import { pwa } from "./pwa";
import MarkdownIt from "markdown-it";

const sidebarGuide = [
  {
    text: "Introduction",
    items: [
      { text: "Markdown Examples", link: "/guide/introduction" },
      { text: "Runtime API Examples", link: "/guide/api-examples" },
    ],
  },
  {
    text: "Essentials",
    items: [
      { text: "Markdown Examples", link: "/guide/ess3" },
      { text: "Runtime API Examples", link: "/guide/ess4" },
    ],
  },
  {
    text: "Essentials",
    items: [
      { text: "Markdown Examples", link: "/guide/ess1" },
      { text: "Runtime API Examples", link: "/guide/ess2" },
    ],
  },
];
const sidebarExamples = [
  {
    text: "Phrasebook",
    items: [
      { text: "Cha1", link: "/examples/phrasebook_1" },
      { text: "Cha2", link: "/examples/phrasebook_2" },
    ],
  },
  {
    text: "Stories",
    items: [
      { text: "Wise girl", link: "/examples/tale_1" },
      { text: "Three brothers", link: "/examples/tale_2" },
    ],
  },
];

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    pwa: pwa as any,
    vite: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../components"),
        },
      },
    },
    base: "/urssivar/",

    title: "Urssivar",
    description: "Kaitag Language Standard",
    themeConfig: {
      // https://vitepress.dev/reference/default-theme-config
      logo: {
        light: "/logo-light.png",
        dark: "/logo-dark.png",
      },
      search: {
        provider: "local",
      },
      footer: {
        message: "Uvkhara vaxt akku.",
      },
      nav: [
        {
          text: "Guide",
          link: "/guide/introduction",
          activeMatch: "/guide/",
        },
        {
          text: "Examples",
          link: "/examples/phrasebook_1",
          activeMatch: "/examples/",
        },
        {
          text: "Apps",
          items: [
            {
              text: "Avdan: Cards for Kids",
              link: "https://play.google.com/store/apps/details?id=com.alkaitagi.avdan",
            },
            {
              text: "Bazur: Online Dictionary",
              link: "https://bazur.raxys.app/",
            },
            {
              text: "Yaziv: Script Converter",
              link: "https://yaziv.raxys.app/",
            },
          ],
        },
      ],

      sidebar: {
        "/guide/": sidebarGuide,
        "/examples/": sidebarExamples,
      },

      socialLinks: [
        {
          icon: { svg: telegramSvg },
          link: "https://t.me/urssivar",
        },
        { icon: "github", link: "https://github.com/vuejs/vitepress" },
      ],
    },

    markdown: {
      config: (md) => {
        const mreg = require("markdown-it-regexp");
        md.use(
          mreg(/\[(.+?)\|(.+?)\]/, (match) => {
            const [, c, h] = match;
            return `<W h="${h}">${stripP(md.render(c))}</W>`;
          })
        );

        const cont = require("markdown-it-container");
        md.use(cont, "example", {
          validate: function (params) {
            return params.trim().match(/^example/);
          },
          render: function (tokens, idx) {
            if (tokens[idx].nesting !== 1) return "-->\n";

            const sidx = tokens
              .slice(idx)
              .findIndex((t) => t.type === "table_open");
            const eidx = tokens
              .slice(idx)
              .findIndex((t) => t.type === "table_close");
            const table = parseTable(md, tokens.slice(idx + sidx, idx + eidx));
            const flags = table[0].splice(1);
            const segments = table.splice(1);
            return (
              `<P :flags='${JSON.stringify(flags)}' :segments='${JSON.stringify(
                segments
              )}'/>` + "\n<!--"
            );
          },
        });

        md.use(require("markdown-it-attrs"));
        md.use(require("markdown-it-bracketed-spans"));
      },
    },
  })
);

function parseTable(md: MarkdownIt, tokens: any[]) {
  const rs: string[][] = [];
  for (const t of tokens) {
    if (t.type === "tr_open") {
      rs.push([]);
    } else if (t.type === "inline") {
      let c = stripP(md.render(t.content));
      rs[rs.length - 1].push(c);
    }
  }
  return rs;
}

function stripP(s: string) {
  // const pref = "<p>";
  // if (s.startsWith(pref)) s = s.substring(pref.length);
  // const suff = "</p>\n";
  // if (s.endsWith(suff)) s = s.substring(0, suff.length - 1);
  return s;
}
