import { defineConfig, type DefaultTheme } from 'vitepress'

export const ru = defineConfig({
    lang: 'ru-RU',
    description: 'Стандарт Кайтагского Языка',
    title: 'Urssivar',
    titleTemplate: 'Кайтагский Язык',
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

        outline: {
            label: 'Содержание страницы',
            level: [2, 4]
        },

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
            text: "Проверка письма",
            link: "/ru/typing",
            activeMatch: "/ru/typing/",
        },
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
            text: 'Основная логика',
            items: [
                {
                    text: 'Связки',
                    link: 'copulas'
                },
                {
                    text: 'Предикативные частицы',
                    link: 'predicatives'
                },
                {
                    text: 'Падежи',
                    link: 'cases'
                },
            ]
        },
        {
            text: 'Применения',
            items: [
                {
                    text: 'Вопросы',
                    link: 'questions'
                },
            ]
        }
    ]
}
