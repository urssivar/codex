import dictionary from "./dictionary.json";

export default {
    load() {
        // return dictionary;
        const letters = ['а', 'пь', 'ҳ'];
        return letters.reduce(
            (dict, letter) => {
                dict[letter] = dictionary[letter];
                return dict;
            },
            {}
        );
    }
}
