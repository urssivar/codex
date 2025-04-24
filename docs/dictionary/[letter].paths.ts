import { alphabet } from "../../.vitepress/alphabet"

export default {
  paths() {
    return alphabet.map((letter) => ({
      params: { letter }
    }));
  }
}
