function decompress(str) {
    let temp = "";
    for (let i = 0; i < str.length; i += 2) {
        for (let j = 0; j < str[i + 1]; j++) {
            temp += str[i];
        }
    }
    console.log(temp);
}

let str = "a3b2";
decompress(str);
// aaabb