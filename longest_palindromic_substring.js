function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

function palSubstring(str) {
    let maxval = -Infinity;

    for (let i = 0; i < str.length; i++) {
        let temp = "";
        for (let j = i; j < str.length; j++) {
            temp += str[j];
            if (isPalindrome(temp)) {
                if (temp.length > maxval) {
                    maxval = temp.length;
                }
            }
        }
    }
    return maxval;
}

let s = "thisracecarisgood";
console.log(`The longest palindromic substring is: ${palSubstring(s)}`);