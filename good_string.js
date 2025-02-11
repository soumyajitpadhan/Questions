function goodString(str, n) {
    let temp = "";
    temp = temp + str[0];

    for (let i = 1; i < n; i++) {
        if (temp.length % 2 === 1) {
            if (temp[temp.length - 1] !== str[i]) {
                temp = temp + str[i];
            }
        }
        else {
            temp += str[i];
        }
    }

    if (temp.length % 2 === 1) {
        temp = temp.slice(0, temp.length - 1);
    }

    let deletedChar = str.length - temp.length;
    console.log(deletedChar);
    console.log(temp);
}

let str = "goode";
let n = str.length
goodString(str, n);