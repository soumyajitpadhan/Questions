function encrypt(str, start, end) {
    if (start > end) {
        return "";
    }

    let mid = Math.floor((start + end) / 2);

    return str[mid] + encrypt(str, start, mid - 1) + encrypt(str, mid + 1, end);
}

let str = "abcdefghijk";
let n = str.length;
let start = 0;
let end = n - 1;
console.log(encrypt(str, start, end));