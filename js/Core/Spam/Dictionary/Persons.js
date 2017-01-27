class Persons {
    constructor() {
        this.dictionary = [
            [{
                "gender": "f",
                "words": ["sister", "younger sister", "little sister", "older sister", "big sister"]
            }],
            [{
                "gender": "m",
                "words": ["brother", "younger brother", "little brother", "older brother", "big brother"]
            }],
            [{"gender": "f", "words": ["mom", "mother"]}],
            [{"gender": "m", "words": ["dad", "father"]}],
            [{"gender": "b", "words": ["cousin"]}],
        ];

        this.pronouns = {
            "m": ["his"],
            "f": ["her"],
            "b": ["his", "her"],
        }
    }

    get() {
        let words = this.arrayRand(this.dictionary),
            word = this.arrayRand(words[0]["words"]),
            pronoun = this.genderPronoun(words[0]["gender"]);

        return word;
    }

    genderPronoun(gender) {
        return this.arrayRand(this.pronouns[gender]);
    }

    rand(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    arrayRand(dict) {
        return dict[this.rand(0, Object.keys(dict).length - 1)];
    }
}

export default Persons;