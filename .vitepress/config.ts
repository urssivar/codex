import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import path from 'path';
import { telegramSvg } from './icons';
import { pwa } from './pwa';

// https://vitepress.dev/reference/site-config
export default withPwa(defineConfig({
  pwa: pwa as any,
  vite: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "../components")
      },
    },
  },
  base: '/urssivar/',

  title: "Urssivar",
  description: "Kaitag Language Standard",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/introduction' },
      { text: 'Examples', link: '/examples' }
    ],

    sidebar: [
      {
        text: 'Introduction',
        items: [
          { text: 'Markdown Examples', link: '/guide/introduction' },
          { text: 'Runtime API Examples', link: '/guide/api-examples' }
        ]
      },
      {
        text: 'Essentials',
        items: [
          { text: 'Markdown Examples', link: '/guide/ess3' },
          { text: 'Runtime API Examples', link: '/guide/ess4' }
        ]
      },
      {
        text: 'Essentials',
        items: [
          { text: 'Markdown Examples', link: '/guide/ess1' },
          { text: 'Runtime API Examples', link: '/guide/ess2' }
        ]
      },
    ],

    socialLinks: [
      {
        icon: { svg: telegramSvg },
        link: 'https://t.me/urssivar'
      },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },
}));
