type Chapter = Record<string, string[]>;

const tree: Record<string, Chapter> = {
  Guide: {
    Introduction: ["Brief History", "Infrastructure Overview"],
    Essentials: ["Alphabet", "Copulas", "Nouns", "Verbs", "Numerals"],
  },
  Library: {
    Phrasebook: ["Acquaintance", "Shopping", "Cooking", "Inviting"],
    Dialogues: ["Bedtime", "Hiking Preparation"],
    Folklore: ["Wise Girl", "Three Brothers"],
  },
};

function linkify(text: string, slash = false) {
  let url = text.toLowerCase().replaceAll(" ", "-");
  if (slash) url = `/${url}/`;
  return url;
}

function buildSidebar(
  name: string,
  chapter: Chapter,
  collapsed: undefined | boolean = undefined
) {
  const root = linkify(name, true);
  return Object.entries(chapter).map(([c, as]) => ({
    text: c,
    collapsed,
    items: as.map((a) => {
      let link = root;
      if (collapsed) link += linkify(c) + "/";
      link += linkify(a);
      return {
        text: a,
        link,
      };
    }),
  }));
}

export const sidebar = {
  "/guide/": buildSidebar("guide", tree.Guide),
  "/library/": buildSidebar("library", tree.Library, true),
};

function buildNav(root: string, chapter: Chapter) {
  return Object.entries(chapter).map(([c, [a]]) => ({
    text: c,
    link: root + linkify(c, true) + linkify(a),
  }));
}

export const nav = buildNav("/library/", tree.Library);
