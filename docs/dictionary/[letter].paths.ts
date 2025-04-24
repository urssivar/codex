import dictData from "../dict.data";

export default {
  paths() {
    const dict = dictData.load();
    const letters = [] as string[];
    for (const [letter, words] of Object.entries(dict)) {
      if (words.length) {
        letters.push(letter);
      }
    }

    return letters.map((letter) => ({
      params: { letter }
    }));
  }
}
