import * as words from "./words.json";
import * as alphabet from "./alphabet.json";

export default {
    load() {
        return {
            words: words,
            alphabet: alphabet.values,
        }
    }
}
