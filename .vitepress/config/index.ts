import { defineConfig } from "vitepress";
import path from "path";
import { telegramSvg } from "../theme/icons";
import configureMarkdown from "../markdown";
import { en } from './en'
import { ru } from './ru'

export default defineConfig({
  srcDir: "./docs",
  sitemap: {
    hostname: "https://codex.urssivar.com",
  },
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
        "@": path.resolve(__dirname, "../../components"),
        "~": path.resolve(__dirname, "../../"),
      },
    },
    assetsInclude: ["**/*.m4a"],
  },
  cleanUrls: true,

  head: [
    ["link", { rel: "icon", href: "logo-light.png", media: "(prefers-color-scheme: light)" }],
    ["link", { rel: "icon", href: "logo-dark.png", media: "(prefers-color-scheme: dark)" }],
  ],

  themeConfig: {
    logo: {
      light: "/logo-light.png",
      dark: "/logo-dark.png",
    },
    search: {
      provider: "local",
    },
    outline: {
      level: [2, 4]
    },
    socialLinks: [
      {
        icon: { svg: telegramSvg },
        link: "https://t.me/urssivar",
      },
      {
        icon: "youtube",
        link: "https://www.youtube.com/@urssivar",
      },
      {
        icon: "github",
        link: "https://github.com/urssivar/codex",
      },
    ],
  },

  locales: {
    root: { label: 'English', ...en },
    ru: { label: 'Русский', ...ru }
  },

  markdown: {
    config: configureMarkdown,
  },
});
