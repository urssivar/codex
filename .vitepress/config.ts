import { defineConfig } from "vitepress";
import path from "path";
import { telegramSvg } from "./icons";
import { nav, sidebar } from "./tree";
import configureMarkdown from "./markdown";

export default defineConfig({
  srcDir: "./docs",
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
  head: [["link", { rel: "icon", href: "favicon.png", sizes: "any" }]],

  title: "Urssivar",
  description: "Kaitag Standard",
  themeConfig: {
    logo: {
      light: "/logo-light.png",
      dark: "/logo-dark.png",
    },
    search: {
      provider: "local",
    },
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      {
        icon: { svg: telegramSvg },
        link: "https://t.me/urssivar",
      },
      {
        icon: "github",
        link: "https://github.com/alkaitagi/urssivar",
      },
    ],
  },

  markdown: {
    config: configureMarkdown,
  },
});
