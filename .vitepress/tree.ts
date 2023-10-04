type Chapter = Record<string, string[]>;

const tree: Record<string, Chapter | string[]> = {
  Guide: {
    Introduction: ["Welcome"],
  },
  Reference: ["Copula", "Noun Case"],
  Library: {
    Phrasebook: ["Basics/"],
    Dialogues: ["Bedtime/"],
    Folklore: ["Wise Girl"],
  },
};

function linkify(text: string, slash = false) {
  let url = text.toLowerCase().replaceAll(" ", "-");
  if (slash) url = `/${url}/`;
  return url;
}

function buildSidebar(name: string, chapter: Chapter | string[]) {
  const root = linkify(name, true);
  if (Array.isArray(chapter))
    return chapter.map((c) => ({
      text: c.replaceAll("/", ""),
      link: root + linkify(c),
    }));
  return Object.entries(chapter).map(([c, as]) => ({
    text: c,
    collapsed: true,
    items: as.map((a) => {
      return {
        text: a.replaceAll("/", ""),
        link: root + linkify(c) + "/" + linkify(a),
      };
    }),
  }));
}

export const sidebar = {
  "/guide/": buildSidebar("guide", tree.Guide),
  "/reference/": buildSidebar("reference", tree.Reference),
  "/library/": buildSidebar("library", tree.Library),
};

function buildNav(root: string, chapter: Chapter) {
  return Object.entries(chapter).map(([c, [a]]) => ({
    text: c,
    link: root + linkify(c, true) + linkify(a),
  }));
}

export const nav = buildNav("/library/", tree.Library as Chapter);
