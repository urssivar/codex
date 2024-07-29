import { defineConfig, type DefaultTheme } from 'vitepress'

export const en = defineConfig({
    lang: 'en-US',
    description: 'Kaitag language standard',
    title: 'Urssivar',
    titleTemplate: 'Kaitag Language',
    head: [
        ['meta', {
            name: 'keywords',
            content: 'kaitag, kaitag language, kaitags, dagestan, caucasus',
        }],
    ],

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
            text: "Typing test",
            link: "/typing",
            activeMatch: "/typing",
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
    ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Base Logic',
            items: [
                {
                    text: 'Copulas',
                    link: 'copulas'
                },
                {
                    text: 'Predicative Particles',
                    link: 'predicatives'
                },
                {
                    text: 'Cases',
                    link: 'cases'
                },
            ]
        },
        {
            text: 'Usecases',
            items: [
                {
                    text: 'Questions',
                    link: 'questions'
                },
            ]
        }
    ]
}
