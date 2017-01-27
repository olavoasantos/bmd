class Contractions {
    constructor() {
        this.dictionary = {
            "I am": ["I am", "I'm"],
            "I am not": ["I am not", "I'm not"],
            "He is": ["He is", "He's",],
            "He is not": ["He is not", "He isn't", "He's not"],
            "is not": ["is not", "isn't"],
            "She is": ["She is", "She's",],
            "She is not": ["She is not", "She isn't", "She's not"],
            "It is": ["It is", "It's",],
            "It is not": ["It is not", "It isn't", "It's not"],
            "You are": ["You are", "You're",],
            "You are not": ["You are not", "You aren't", "You're not"],
            "We are": ["We are", "We're",],
            "We are not": ["We are not", "We aren't", "We're not"],
            "They are": ["They are", "They're",],
            "They are not": ["They are not", "They're not"],
            "are not": ["are not", "aren't"],
            "I was": ["I was"],
            "I was not": ["I was not", "I wasn't"],
            "He was": ["He was"],
            "He was not": ["He was not", "He wasn't"],
            "She was": ["She was"],
            "She was not": ["She was not", "She wasn't"],
            "It was": ["It was"],
            "It was not": ["It was not", "It wasn't"],
            "was not": ["was not", "wasn't"],
            "You were": ["You were"],
            "You were not": ["You were not", "You weren't"],
            "We were": ["We were"],
            "We were not": ["We were not", "We weren't"],
            "They were": ["They were"],
            "They were not": ["They were not", "They weren't"],
            "were not": ["were not", "weren't"],
            "I do": ["I do"],
            "I do not": ["I do not", "I don't"],
            "do not": ["do not", "don't"],
            "He does": ["He does"],
            "He does not": ["He does not", "He doesn't"],
            "does not": ["does not", "doesn't"],
            "She does": ["She does"],
            "She does not": ["She does not", "She doesn't"],
            "It does": ["It does"],
            "It does not": ["It does not", "It doesn't"],
            "You do": ["You do"],
            "You do not": ["You do not", "You don't"],
            "We do": ["We do"],
            "We do not": ["We do not", "We don't"],
            "They do": ["They do"],
            "They do not": ["They do not", "They don't"],
            "I have": ["I have", "I've"],
            "I have not": ["I have not", "I haven't", "I've not"],
            "have not": ["have not", "haven't"],
            "has not": ["has not", "hasn't"],
            "He has": ["He has", "He's"],
            "He has not": ["He has not", "He hasn't", "He's not"],
            "She has": ["She has", "She's"],
            "She has not": ["She has not", "She hasn't", "She's not"],
            "It has": ["It has", "It's"],
            "It has not": ["It has not", "It hasn't", "It's not"],
            "You have": ["You have", "You've"],
            "You have not": ["You have not", "You haven't", "You've not"],
            "We have": ["We have", "We've"],
            "We have not": ["We have not", "We haven't", "We've not"],
            "They have": ["They have", "They've"],
            "They have not": ["They have not", "They haven't", "They've not"],
            "I had": ["I had", "I'd"],
            "he had": ["he had", "he'd "],
            "she had": ["she had", "she'd "],
            "it had": ["it had", "it'd "],
            "you had": ["you had", "you'd"],
            "we had": ["we had", "we'd "],
            "they had": ["they had", "they'd "],
            "had not": ["had not", "hadn't"],
            "I had not": ["I had not", "I hadn't", "I'd not"],
            "he had not": ["he had not", "he hadn't", "he'd not"],
            "she had not": ["she had not", "she hadn't", "she'd not"],
            "it had not": ["it had not", "it hadn't", "it'd not"],
            "you had not": ["you had not", "you hadn't", "you'd not"],
            "we had not": ["we had not", "we hadn't", "we'd not"],
            "they had not": ["they had not", "they hadn't", "they'd not"],
            "I can": ["I can"],
            "he can": ["he can"],
            "she can": ["she can"],
            "it can": ["it can"],
            "you can": ["you can"],
            "we can": ["we can"],
            "they can": ["they can"],
            "cannot": ["can't", "cannot"],
            "I cannot": ["I cannot", "I can't"],
            "he cannot": ["he cannot", "he can't"],
            "she cannot": ["she cannot", "she can't"],
            "it cannot": ["it cannot", "it can't"],
            "you cannot": ["you cannot", "you can't"],
            "we cannot": ["we cannot", "we can't"],
            "they cannot": ["they cannot", "they can't"],
            "I could": ["I could"],
            "he could": ["he could"],
            "she could": ["she could"],
            "it could": ["it could"],
            "you could": ["you could"],
            "we could": ["we could"],
            "they could": ["they could"],
            "could not": ["couldn't", "could not"],
            "I could not": ["I could not", "I couldn't"],
            "he could not": ["he could not", "he couldn't"],
            "she could not": ["she could not", "she couldn't"],
            "it could not": ["it could not", "it couldn't"],
            "you could not": ["you could not", "you couldn't"],
            "we could not": ["we could not", "we couldn't"],
            "they could not": ["they could not", "they couldn't"],
            "I must": ["I must"],
            "he must": ["he must"],
            "she must": ["she must"],
            "it must": ["it must"],
            "you must": ["you must"],
            "we must": ["we must"],
            "they must": ["they must"],
            "I must not": ["I must not", "I mustn't"],
            "must not": ["must not", "mustn't"],
            "he must not": ["he must not", "he mustn't"],
            "she must not": ["she must not", "she mustn't"],
            "it must not": ["it must not", "it mustn't"],
            "you must not": ["you must not", "you mustn't"],
            "we must not": ["we must not", "we mustn't"],
            "they must not": ["they must not", "they mustn't"],
            "I shall": ["I shall"],
            "he shall": ["he shall"],
            "she shall": ["she shall"],
            "it shall": ["it shall"],
            "you shall": ["you shall"],
            "we shall": ["we shall"],
            "they shall": ["they shall"],
            "shall not": ["shall not", "shan't"],
            "I shall not": ["I shall not", "I shan't"],
            "he shall not": ["he shall not", "he shan't"],
            "she shall not": ["she shall not", "she shan't"],
            "it shall not": ["it shall not", "it shan't"],
            "you shall not": ["you shall not", "you shan't"],
            "we shall not": ["we shall not", "we shan't"],
            "they shall not": ["they shall not", "they shan't"],
            "I would": ["I would", "I'd"],
            "he would": ["he would", "He'd"],
            "she would": ["she would", "She'd"],
            "it would": ["it would", "It'd*"],
            "you would": ["you would", "You'd"],
            "we would": ["we would", "We'd"],
            "they would": ["they would", "They'd"],
            "I will": ["I will", "I'll"],
            "he will": ["he will", "He'll"],
            "she will": ["she will", "She'll "],
            "it will": ["it will", "It'll"],
            "you will": ["you will", "You'll"],
            "we will": ["we will", "We'll"],
            "they will": ["they will", "They'll"],
            "will not": ["will not", "won't"],
            "I will not": ["I will not", "I won't", "I'll not"],
            "he will not": ["he will not", "He won't", "He'll not"],
            "she will not": ["she will not", "She won't", "She'll not"],
            "it will not": ["it will not", "It won't", "It'll not"],
            "you will not": ["you will not", "You won't", "You'll not"],
            "we will not": ["we will not", "We won't", "We'll not"],
            "they will not": ["they will not", "They won't", "They'll not"],
            "I should": ["I should"],
            "he should": ["he should"],
            "she should": ["she should"],
            "it should": ["it should"],
            "you should": ["you should"],
            "we should": ["we should"],
            "they should": ["they should"],
            "I should not": ["I should not", "I shouldn't"],
            "should not": ["should not", "shouldn't"],
            "he should not": ["he should not", "he shouldn't"],
            "she should not": ["she should not", "she shouldn't"],
            "it should not": ["it should not", "it shouldn't"],
            "you should not": ["you should not", "you shouldn't"],
            "we should not": ["we should not", "we shouldn't"],
            "they should not": ["they should not", "they shouldn't"],
            "would not": ["would not", "wouldn't"],
            "I would not": ["I would not", "I wouldn't", "I'd not"],
            "he would not": ["he would not", "He wouldn't", "He'd not"],
            "she would not": ["she would not", "She wouldn't", "She'd not"],
            "it would not": ["it would not", "It wouldn't", "It'd not*"],
            "you would not": ["you would not", "You wouldn't", "You'd not"],
            "we would not": ["we would not", "We wouldn't", "We'd not"],
            "they would not": ["they would not", "They wouldn't", "They'd not"],
            "Let us": ["Let us", "Let's"],
            "Let us not": ["Let us not", "Let's not"],
        };
    }

    get(contraction) {
        return this.arrayRand(this.dictionary[contraction]) || contraction;
    }

    rand(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    arrayRand(dict) {
        return dict[this.rand(0, Object.keys(dict).length - 1)];
    }
}

export default Contractions;