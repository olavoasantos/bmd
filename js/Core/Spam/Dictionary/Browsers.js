class Browsers {
    constructor() {
        this.dictionary = [
            "iOS Safari",
            "Opera Mini",
            "Android Browser",
            "Opera Mobile",
            "Blackberry Browser",
            "Edge",
            "IE Mobile",
            "Ie",
            "Internet explorer",
            "UC Browser for Android",
            "Chrome for Android",
            "Firefox for Android",
            "Tor Browser",
            "Chrome",
            "Vivaldi",
            "Firefox",
            "Safari",
            "Samsung Internet",
            "Opera",
        ];
    }

    get() {
        return this.arrayRand(this.dictionary);
    }

    rand(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    arrayRand(dict) {
        return dict[this.rand(0, Object.keys(dict).length - 1)];
    }
}

export default Browsers;