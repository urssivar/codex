import dictLoader from "./data/dictionary.data";

export default {
  paths() {
    const dict = dictLoader.load();
    return Object.keys(dict).map((letter) => ({
      params: { letter }
    }));
  }
}
