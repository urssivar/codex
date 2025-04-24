import dictLoader from "./data/dictionary.data";

export default {
  paths() {
    const dict = dictLoader.load();
    return dict.alphabet.map((letter) => ({
      params: { letter }
    }));
  }
}
