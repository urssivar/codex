import { defineConfig } from "vitepress";
import { withPwa } from "@vite-pwa/vitepress";
import path from "path";
import { telegramSvg } from "./icons";
import { pwa } from "./pwa";
import configureMarkdown from "./markdown";
import { sidebarExamples, sidebarGuide } from "./sidebar";

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
        { icon: "github", link: "https://github.com/alkaitagi/urssivar" },
      ],
    },

    markdown: {
      config: configureMarkdown,
    },
  })
);
