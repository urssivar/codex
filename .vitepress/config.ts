import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import path from "path";
import { telegramSvg } from "./icons";
import { pwa } from "./pwa";
import * as Tree from "./tree";
import configureMarkdown from "./markdown";

// https://vitepress.dev/reference/site-config
export default withPwa(
  defineConfig({
    pwa: pwa as any,
    vue: {
      template: {
        transformAssetUrls: {
          source: ["src"],
        },
      },
    },
    vite: {
      resolve: {
        alias: {
          "@": path.resolve(__dirname, "../components"),
        },
      },
      assetsInclude: ["**/*.m4a"],
    },
    base: "/urssivar/",
    head: [["link", { rel: "icon", href: "/favicon.png", sizes: "any" }]],

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
        message: "uvkhara vaxt akku / no time to die",
      },
      nav: [
        {
          text: "Guide",
          link: "/guide/introduction/welcome",
          activeMatch: "/guide/",
        },
        {
          text: "Reference",
          link: "/reference/copula",
          activeMatch: "/reference/",
        },
        {
          text: "Library",
          activeMatch: "/library/",
          items: Tree.nav,
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

      sidebar: Tree.sidebar,
      socialLinks: [
        {
          icon: { svg: telegramSvg },
          link: "https://t.me/urssivar",
        },
        { icon: "github", link: "https://github.com/alkaitagi/urssivar" },
      ],
    },

    markdown: {
      config: configureMarkdown,
    },
  })
);
