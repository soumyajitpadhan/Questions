function lostTreasure(str) {
    let x = 0;
    let y = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'E') {
            x++;
        }
        else if (str[i] === 'W') {
            x--;
        }
        else if (str[i] === 'N') {
            y++;
        }
        else if (str[i] === 'S') {
            y--;
        }
    }
    console.log(`X : ${x}, Y : ${y}`);
}


let str = "NNEEWSW";
lostTreasure(str);  