import dictionary from "./dictionary.json";

export default {
    load() {
        // return dictionary;
        const letter = 'а';
        return { [letter]: dictionary[letter] };
    }
}
