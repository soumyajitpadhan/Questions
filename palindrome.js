let n = 1221;

let temp = n;

let reverse = 0;

while (temp > 0) {
    let digit = temp % 10;
    reverse = (reverse * 10) + digit;
    temp = Math.floor(temp / 10);
}

if (reverse === n) {
    console.log("Palindrome");
}
else {
    console.log("Not palindrome");
}
