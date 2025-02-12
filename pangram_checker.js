function pangramChecker(str) {
    str = str.toLowerCase();

    let charArray = new Array(26);

    for (let i = 0; i < str.length; i++) {
        charArray[str[i].charCodeAt() - 97] = true;
    }

    let ans = true;
    for (let i = 0; i < 26; i++) {
        if (charArray[i] === undefined) {
            ans = false;
            break;
        }
    }
    return ans;
}

let str = "The quick brown fox jumps over the lazy dog";
console.log(pangramChecker(str));   