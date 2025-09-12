import dictLoader from "./dictionary.data";

export default {
  paths() {
    const dict = dictLoader.load();
    return Object.keys(dict).map((letter) => ({
      params: { letter }
    }));
  }
}
