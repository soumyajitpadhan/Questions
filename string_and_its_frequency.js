let str = "this is a sample text this text contains sample words sample words are used for testing";

str = str.split(' ');

let map = {};

for (let i = 0; i < str.length; i++) {
    if (map[str[i]]) {
        map[str[i]]++;
    }
    else {
        map[str[i]] = 1;
    }
}

let maxval= -Infinity;
let maxstr = null;

for(let key in  map){
    if(map[key] > maxval){
        maxval = map[key];
        maxstr = key;
    }
}

console.log(maxstr);