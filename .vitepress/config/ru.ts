import { defineConfig, type DefaultTheme } from 'vitepress'

export const ru = defineConfig({
    lang: 'ru-RU',
    description: 'Кайтагский языковой стандарт',

    head: [
        ['meta', {
            name: 'keywords',
            content: 'кайтаг, кайтагский, кайтагский язык, кайтаги, кайтагцы, хайдак, дагестан, кавказ',
        }],
    ],

    themeConfig: {
        nav: nav(),

        sidebar: {
            '/ru/reference/': {
                base: '/ru/reference/',
                items: sidebarReference()
            },
            // '/ru/phrasebook/': {
            //     base: '/ru/reference/',
            //     items: sidebarPhrasebook()
            // }
        },

        // editLink: {
        //     pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
        //     text: 'Редактировать страницу'
        // },

        // footer: {
        //     message: 'Опубликовано под лицензией MIT.',
        //     copyright: '© 2019 – настоящее время, Эван Ю'
        // },

        outline: { label: 'Содержание страницы' },

        docFooter: {
            prev: 'Предыдущая страница',
            next: 'Следующая страница'
        },

        lastUpdated: {
            text: 'Обновлено'
        },

        darkModeSwitchLabel: 'Оформление',
        lightModeSwitchTitle: 'Переключить на светлую тему',
        darkModeSwitchTitle: 'Переключить на тёмную тему',
        sidebarMenuLabel: 'Меню',
        returnToTopLabel: 'Вернуться к началу',
        langMenuLabel: 'Изменить язык'
    }
})

function nav(): DefaultTheme.NavItem[] {
    return [
        {
            text: "Справочник",
            link: "/ru/reference/copulas",
            activeMatch: "/ru/reference/",
        },
        // {
        //     text: "Разговорник",
        //     link: "/ru/phrasebook/basics/",
        //     activeMatch: "/ru/phrasebook/",
        // },
        {
            text: "Приложения",
            items: [
                {
                    text: "Avdan: Карточки для Детей",
                    link: "https://play.google.com/store/apps/details?id=com.alkaitagi.avdan",
                },
                {
                    text: "Bazur: Онлайн Словарь",
                    link: "https://bazur.raxys.app/",
                },
                {
                    text: "Yaziv: Конвертер Текста",
                    link: "https://yaziv.raxys.app/",
                },
            ],
        },
    ];
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
    return [
        {
            text: 'Справочник',
            items: [
                {
                    text: 'Связки',
                    link: 'copulas'
                },
            ]
        }
    ]
}


// function sidebarPhrasebook(): DefaultTheme.SidebarItem[] {
//     return [
//         {
//             text: 'Введение',
//             collapsed: false,
//             items: [
//                 { text: 'Что такое VitePress?', link: 'what-is-vitepress' },
//                 { text: 'Первые шаги', link: 'getting-started' },
//                 { text: 'Маршрутизация', link: 'routing' },
//                 { text: 'Развёртывание', link: 'deploy' }
//             ]
//         },
//         {
//             text: 'Написание',
//             collapsed: false,
//             items: [
//                 { text: 'Расширения Markdown', link: 'markdown' },
//                 { text: 'Обработка ресурсов', link: 'asset-handling' },
//                 { text: 'Метаданные', link: 'frontmatter' },
//                 { text: 'Использование Vue в Markdown', link: 'using-vue' },
//                 { text: 'Интернационализация', link: 'i18n' }
//             ]
//         },
//         {
//             text: 'Настройка',
//             collapsed: false,
//             items: [
//                 { text: 'Пользовательская тема', link: 'custom-theme' },
//                 {
//                     text: 'Расширение темы по умолчанию',
//                     link: 'extending-default-theme'
//                 },
//                 {
//                     text: 'Загрузка данных в режиме реального времени',
//                     link: 'data-loading'
//                 },
//                 { text: 'Совместимость с SSR', link: 'ssr-compat' },
//                 { text: 'Подключение к CMS', link: 'cms' }
//             ]
//         },
//         {
//             text: 'Экспериментально',
//             collapsed: false,
//             items: [
//                 { text: 'Режим MPA', link: 'mpa-mode' },
//                 { text: 'Генерация карты сайта', link: 'sitemap-generation' }
//             ]
//         },
//         { text: 'Конфигурация и API', base: '/ru/reference/', link: 'site-config' }
//     ]
// }
