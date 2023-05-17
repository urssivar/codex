const sidebar = {
  Guide: {
    Introduction: ["Brief History", "Infrastructure Overview"],
    Essentials: ["Alphabet", "Copulas", "Nouns", "Verbs", "Numerals"],
  },
  Library: {
    Phrasebook: ["Acquaintance", "Shopping", "Cooking", "Inviting"],
    Dialogues: ["Sleep time", "Hiking preparation"],
    "Folk Tales": ["Wise girl", "Three brothers"],
  },
};

const linkify = (s: string) => s.toLowerCase().replaceAll(" ", "-");

export default function () {
  return Object.entries(sidebar).reduce((cf, [sub, chs]) => {
    const r = `/${linkify(sub)}/`;
    cf[r] = Object.entries(chs).map(([ch, arts]) => ({
      text: ch,
      items: arts.map((text) => {
        return {
          text,
          link: r + linkify(text),
        };
      }),
    }));
    return cf;
  }, {});
}
