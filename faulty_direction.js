function faultyDirection(n, str) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < n; i++) {
        if (str[i] === 'R') {
            x += 1;
        }
        else if (str[i] === 'L') {
            x -= 1;
        }
        else if (str[i] === 'U') {
            y += 1;
        }
        else if (str[i] === 'D') {
            y -= 1;
        }
    }

    if (x === 0 && y === 0) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}

// let str = "RLRUD";
let str = "LRUD";
let n = str.length;
faultyDirection(n, str);