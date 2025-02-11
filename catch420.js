function catch420(n) {
    let str = n.toString();

    let found = false;

    for (let i = 0; i <= str.length - 3; i++) {
        if (str[i] === '4' && str[i + 1] === '2' && str[i + 2] === '0') {
            found = true;
            break;
        }
    }

    if (found) {
        console.log("Caught");
    }
    else {
        console.log("Escaped");
    }

}

catch420(97420);