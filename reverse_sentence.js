function reverseSentence(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ');
}

let str = "Hello World";
console.log(reverseSentence(str));