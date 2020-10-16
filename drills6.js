let cipher = {
    a: 2,
    b: 3,
    c: 4,
    d: 5
};

function decode(word) {
    if(ciher[word[0]]) {
        return word[cipher[word[0]]];
    } else {
        return ' ';
    }
}

function decodeWords(words) {
    let list = words.split(' ');
    let decoded = "";
    for(let word of list) {
        decoded += decode(word);
    }
}


