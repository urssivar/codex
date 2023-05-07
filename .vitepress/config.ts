import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import path from 'path';
import { telegramSvg } from './icons';
import { pwa } from './pwa';

const sidebarGuide = [
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
];
const sidebarExamples = [
  {
    text: 'Phrasebook',
    items: [
      { text: 'Cha1', link: '/examples/phrasebook_1' },
      { text: 'Cha2', link: '/examples/phrasebook_2' }
    ]
  },
  {
    text: 'Stories',
    items: [
      { text: 'Wise girl', link: '/examples/tale_1' },
      { text: 'Three brothers', link: '/examples/tale_2' }
    ]
  },
]

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
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Guide',
        link: '/guide/introduction',
        activeMatch: '/guide/',
      },
      {
        text: 'Examples',
        link: '/examples/phrasebook_1',
        activeMatch: '/examples/'
      }
    ],

    sidebar: {
      '/guide/': sidebarGuide,
      '/examples/': sidebarExamples
    },

    socialLinks: [
      {
        icon: { svg: telegramSvg },
        link: 'https://t.me/urssivar'
      },
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  },

  markdown: {
    config: (md) => {
      md.use(require('markdown-it-attrs'));
      md.use(require('markdown-it-bracketed-spans'));

      const mreg = require('markdown-it-regexp');
      md.use(mreg(/\[(.+?)\|(.+?)\]/, (match) => {
        const [, c, h] = match;
        return `<W h="${h}">${c}</W>`;
      }));
    }
  }
}));
