const sidebar = {
  guide: {
    Introduction: ["Brief History", "Infrastructure Overview"],
    Essentials: ["Alphabet", "Copulas", "Nouns", "Verbs", "Numerals"],
  },
  library: {
    Phrasebook: ["Acquaintance", "Shopping", "Cooking", "Inviting"],
    Dialogues: ["Sleep time", "Hiking preparation"],
    "Folk Tales": ["Wise girl", "Three brothers"],
  },
};

export default function () {
  return Object.entries(sidebar).reduce((cf, [sub, chs]) => {
    const r = `/${sub}/`;
    cf[r] = Object.entries(chs).map(([ch, arts]) => ({
      text: ch,
      items: arts.map((text) => {
        return {
          text,
          link: r + text.toLowerCase().replaceAll(" ", "-"),
        };
      }),
    }));
    return cf;
  }, {});
}
