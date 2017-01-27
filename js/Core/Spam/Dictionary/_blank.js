class Browsers {
    constructor() {
        this.dictionary = {

        };
    }

    get(word) {
        return this.arrayRand(this.dictionary[word]) || word;
    }

    rand(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    arrayRand(dict) {
        return dict[this.rand(0, Object.keys(dict).length - 1)];
    }
}

export default Browsers;