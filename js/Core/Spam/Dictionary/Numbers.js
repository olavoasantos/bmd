class Numbers {
    constructor() {
        this.ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        this.tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        this.teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    }

    rand(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    get(min = 0, max = 10) {
        let rand = this.rand(min, max);

        while(rand < min) {
            rand = this.rand(min, max);
        }

        return (this.rand(0, 1)) ? this.convert(rand) : rand;

    }

    convert(number) {
        if (number == 0) {
            return "zero";
        } else {
            return this.convert_millions(number);
        }
    }


    convert_millions(num) {
        if (num >= 1000000) {
            return this.convert_millions(Math.floor(num / 1000000)) + " million " + this.convert_thousands(num % 1000000);
        }
        else {
            return this.convert_thousands(num);
        }
    }

    convert_thousands(num) {
        if (num >= 1000) {
            return this.convert_hundreds(Math.floor(num / 1000)) + " thousand " + this.convert_hundreds(num % 1000);
        }
        else {
            return this.convert_hundreds(num);
        }
    }

    convert_hundreds(num) {
        if (num > 99) {
            return this.ones[Math.floor(num / 100)] + " hundred " + this.convert_tens(num % 100);
        }
        else {
            return this.convert_tens(num);
        }
    }

    convert_tens(num) {
        if (num < 10) return this.ones[num];
        else if (num >= 10 && num < 20) return this.teens[num - 10];
        else {
            return this.tens[Math.floor(num / 10)] + " " + this.ones[num % 10];
        }
    }
}

export default Numbers;