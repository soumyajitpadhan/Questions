function numberOfStone(box, n) {
    let l = 0;
    let r = n - 1;

    let ramStone = 0;
    let shyamStone = 0;

    let res = 0;

    while (l < r) {
        if (ramStone <= shyamStone) {
            ramStone += box[l];
            l++;
        }
        else {
            shyamStone += box[r];
            r--;
        }

        if (ramStone === shyamStone) {
            res = ramStone;
        }
    }
    console.log(res);
}

let box = [100, 8, 97, 2, 1];
let n = box.length;

numberOfStone(box, n);