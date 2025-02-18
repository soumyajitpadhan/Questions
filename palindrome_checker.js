function isPalindrome(str) {
    str = str.toLowerCase();
    let temp = "";
    for (let i = 0; i < str.length; i++) {
        let ascii = str[i].charCodeAt();

        if (ascii >= 'a'.charCodeAt() && ascii <= 'z'.charCodeAt()) {
            temp += str[i];
        }
    }

    if (temp.length === 0 || temp.length === 1) {
        return true;
    }

    let l = 0;
    let r = temp.length - 1;

    while (l < r) {
        if (temp[l] !== temp[r]) {
            return false;
        }
        else {
            l++;
            r--;
        }
    }
    return true;
}

let str = "Too hot to hoot."
console.log(isPalindrome(str));