function len(str) {
    if (str === "") {
        return 0;
    }

    return 1 + len(str.slice(1));
}

let str = "masaischool";
console.log(len(str));