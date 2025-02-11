function customReplace(str, findstr, replacestr) {
    let newStr = "";
    let i = 0;

    while (i <= str.length - findstr.length) {
        let isfound = true;
        for (let j = 0; j < findstr.length; j++) {
            if (str[i + j] !== findstr[j]) {
                isfound = false;
                break;
            }
        }

        if (isfound) {
            newStr += replacestr;
            i = i + replacestr.length;
        }
        else {
            newStr += str[i];
            i++;
        }
    }

    if (i < str.length) {
        newStr += str.slice(i);
    }

    return newStr;
}

let str = "Hello World Good Morning";
let findstr = "World";
let replacestr = "Buddy";

console.log(customReplace(str, findstr, replacestr));