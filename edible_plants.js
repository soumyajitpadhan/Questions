let str1 = "xY";
let str2 = "AYxxXY";

let map = {};

for (let i = 0; i < str1.length; i++) {
    map[str1[i]] = 1;
}

let count = 0;

for (let i = 0; i < str2.length; i++) {
    if (map[str2[i]]) {
        count++;
    }
}

console.log(count);