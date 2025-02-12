let str = "nature";

let map = {};

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u') {
        map[str[i]] = true;
    }
}

let vowel = "aeiou";
let temp = "";

for (let k of vowel) {
    if (!map[k]) {
        temp += k;
    }
}

if (temp.length === 0) {
    console.log(-1);
}
else {
    console.log(temp);
}