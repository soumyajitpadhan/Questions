function cipherString(n, str) {
    let temp = "";
    let i = 0;
    let j = 0;

    while (i < n) {
        let count = 0;

        while (j < n) {
            if (str[i] === str[j]) {
                count++;
            }
            else {
                break;
            }
            j++;
        }
        temp += str[i] + count;
        i = j;
    }
    return temp;
}

let str = "aabcc";
let n = str.length;
console.log(cipherString(n, str));
//a2b1c2