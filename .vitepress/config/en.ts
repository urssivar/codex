import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    description: 'Kaitag language standard',

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/reference/': {
                base: '/reference/',
                items: sidebarReference()
            },
            // '/phrasebook/': {
            //     base: '/phrasebook/',
            //     items: sidebarPhrasebook()
            // },
        },

        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Edit this page on GitHub'
        // },

        // footer: {
        //     message: 'Released under the MIT License.',
        //     copyright: 'Copyright © 2019-present Evan You'
        // }
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Reference",
            link: "/reference/copulas",
            activeMatch: "/reference/",
        },
        // {
        //     text: "Phrasebook",
        //     link: "/phrasebook/basics/",
        //     activeMatch: "/phrasebook/",
        // },
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
    ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Reference',
            items: [
                {
                    text: 'Copulas',
                    link: 'copulas'
                },
            ]
        }
    ]
}

// function sidebarPhrasebook(): DefaultTheme.SidebarItem[] {
//     return [
//         {
//             text: 'Introduction',
//             collapsed: false,
//             items: [
//                 { text: 'What is VitePress?', link: 'what-is-vitepress' },
//                 { text: 'Getting Started', link: 'getting-started' },
//                 { text: 'Routing', link: 'routing' },
//                 { text: 'Deploy', link: 'deploy' }
//             ]
//         },
//         {
//             text: 'Writing',
//             collapsed: false,
//             items: [
//                 { text: 'Markdown Extensions', link: 'markdown' },
//                 { text: 'Asset Handling', link: 'asset-handling' },
//                 { text: 'Frontmatter', link: 'frontmatter' },
//                 { text: 'Using Vue in Markdown', link: 'using-vue' },
//                 { text: 'Internationalization', link: 'i18n' }
//             ]
//         },
//         {
//             text: 'Customization',
//             collapsed: false,
//             items: [
//                 { text: 'Using a Custom Theme', link: 'custom-theme' },
//                 {
//                     text: 'Extending the Default Theme',
//                     link: 'extending-default-theme'
//                 },
//                 { text: 'Build-Time Data Loading', link: 'data-loading' },
//                 { text: 'SSR Compatibility', link: 'ssr-compat' },
//                 { text: 'Connecting to a CMS', link: 'cms' }
//             ]
//         },
//         {
//             text: 'Experimental',
//             collapsed: false,
//             items: [
//                 { text: 'MPA Mode', link: 'mpa-mode' },
//                 { text: 'Sitemap Generation', link: 'sitemap-generation' }
//             ]
//         },
//         { text: 'Config & API Reference', base: '/reference/', link: 'site-config' }
//     ]
// }
