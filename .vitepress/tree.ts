import { DefaultTheme } from "vitepress/types/shared";

export const nav = <DefaultTheme.NavItem[]>[
  {
    text: "Reference",
    link: "/reference/core/copulas",
    activeMatch: "/reference/",
  },
  {
    text: "Library",
    activeMatch: "/library/",
    items: [
      {
        text: "Phrasebook",
        link: "/library/phrasebook/basics/",
      },
    ],
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
];

export const sidebar = <DefaultTheme.Sidebar>{
  "/reference/": [
    {
      text: "Core Logic",
      items: [
        {
          text: "Phonology",
          link: "/reference/core/phonology",
        },
        {
          text: "Copulas",
          link: "/reference/core/copulas",
        },
        {
          text: "Nominals",
          link: "/reference/core/nominals",
        },
        {
          text: "Adverbials",
          link: "/reference/core/adverbials",
        },
        {
          text: "Numerals",
          link: "/reference/core/numerals",
        },
        {
          text: "Verbs",
          link: "/reference/core/verbs",
        },
        {
          text: "Cases",
          link: "/reference/core/cases",
        },
      ],
    },
    {
      text: "Cookbook",
      items: [
        {
          text: "Questions",
          link: "/reference/cookbook/questions",
        },
        {
          text: "Counting",
          link: "/reference/cookbook/counting",
        },
        {
          text: "Place",
          link: "/reference/cookbook/place",
        },
        {
          text: "Time",
          link: "/reference/cookbook/time",
        },
      ],
    },
  ],
  "/library/": [
    {
      text: "Phrasebook",
      items: [
        {
          text: "Basics",
          link: "/library/phrasebook/basics/",
        },
      ],
    },
    {
      text: "Dialogues",
      items: [],
    },
    {
      text: "Poetry",
      items: [],
    },
    {
      text: "Prose",
      items: [],
    },
  ],
};
