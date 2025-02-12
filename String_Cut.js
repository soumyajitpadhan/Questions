let str = "abcdxyz";

if (str.length % 2 === 0) {
    let mid = str.length / 2;

    let temp = "";

    for (let i = mid - 1; i >= 0; i--) {
        temp += str[i];
    }

    for (let i = str.length - 1; i >= mid; i--) {
        temp += str[i];
    }
    console.log(temp);
}
else {
    let mid = Math.floor(str.length / 2);

    let temp = "";

    for (let i = mid - 1; i >= 0; i--) {
        temp += str[i];
    }

    temp += str[mid];

    for (let i = str.length - 1; i > mid; i--) {
        temp += str[i];
    }
    console.log(temp);
}
