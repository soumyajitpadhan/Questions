let str = "masai";
let map = {};

for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
        map[str[i]]++;
    }
    else {
        map[str[i]] = 1;
    }
}

let isUnique = true;

for (let key in map) {
    if (map[key] !== 1) {
        isUnique = false;
        break;
    }
}

if (isUnique) {
    console.log("Unique");
}
else {
    console.log("No");
}