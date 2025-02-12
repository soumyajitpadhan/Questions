let str = "pingpi";

let map = {};

for (let i = 0; i < str.length; i++) {
    if (str[i] === 'p' || str[i] === 'i' || str[i] === 'n' || str[i] === 'g') {
        if (map[str[i]]) {
            map[str[i]]++;
        }
        else {
            map[str[i]] = 1;
        }
    }
}


if (map['p'] === undefined || map['i'] === undefined || map['n'] === undefined || map['g'] === undefined) {
    console.log(0);
}
else {
    let minval = Infinity;
    for (let key in map) {
        if (map[key] < minval) {
            minval = map[key];
        }
    }
    console.log(minval);
}
