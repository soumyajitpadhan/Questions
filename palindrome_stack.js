function isPalindrome(str) {
    let stack = [];

    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        stack.push(str[i]);
    }

    let start = null;
    if (str.length % 2 === 0) {
        start = str.length / 2;
    }
    else {
        start = Math.floor(str.length / 2) + 1;
    }

    for (let i = start; i < str.length; i++) {
        if (stack.pop() !== str[i]) {
            return "No";
        }
    }
    return "Yes";
}

let str = "abccba";
console.log(isPalindrome(str)); 