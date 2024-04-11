import { defineConfig } from "vitepress";
import path from "path";
import { telegramSvg } from "../theme/icons";
import configureMarkdown from "../markdown";
import { en } from './en'
import { ru } from './ru'


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
        "@": path.resolve(__dirname, "../../components"),
      },
    },
    assetsInclude: ["**/*.m4a"],
  },
  head: [["link", { rel: "icon", href: "favicon.png", sizes: "any" }]],

  title: "Urssivar",
  themeConfig: {
    logo: {
      light: "/logo-light.png",
      dark: "/logo-dark.png",
    },
    search: {
      provider: "local",
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
        link: "https://github.com/urssivar/urssivar",
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
