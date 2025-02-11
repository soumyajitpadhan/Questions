let str = "aman";
let n = str.length;
let map = {};

for (let i = 0; i < n; i++) {
    if (map[str[i]]) {
        map[str[i]]++;
    }
    else {
        map[str[i]] = 1;
    }
}

for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(97 + i);
    if (map[char]) {
        console.log(char + "-" + map[char]);
    }
}

