import number from "./Dictionary/Numbers";
import person from "./Dictionary/Persons";
import browser from "./Dictionary/Browsers";
import synonym from "./Dictionary/Synonyms";
import contraction from "./Dictionary/Contractions";

class SpamDictionary {
    constructor() {

    }

    contraction(cont) {
        let _contraction = new contraction;

        return _contraction.get(cont);
    }

    synonym(word) {
        let _synonym = new synonym;

        return _synonym.get(word);
    }

    person() {
        let _person = new person;

        return _person.get();
    }

    number(min = 0, max = 10) {
        let _number = new number;

        return _number.get(min, max);
    }

    browser() {
        let _browser = new browser;

        return _browser.get();
    }

    rand(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    arrayRand(dict) {
        return dict[this.rand(0, Object.keys(dict).length - 1)];
    }

}

export default SpamDictionary;