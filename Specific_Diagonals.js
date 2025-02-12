function specificDiagonals(R, C, matrix, K) {
    let posI, posJ;
    for (let i = 0; i < R; i++) {
        for (let j = 0; j < C; j++) {
            if (matrix[i][j] === K) {
                posI = i;
                posJ = j;
            }
        }
    }

    let i, j;
    if (posI <= posJ) {
        i = 0;
        j = posJ - posI;
    }
    else {
        i = posI - posJ;
        j = 0;
    }

    let bag = "";
    while (i < R && j < C) {
        bag += matrix[i][j] + " ";
        i++;
        j++;
    }

    console.log(bag);

    bag = "";
    while (posI > 0 && posJ < C - 1) {
        posI--;
        posJ++;
    }

    i = posI;
    j = posJ;

    while (i < R && j >= 0) {
        bag += matrix[i][j] + " ";
        i++;
        j--;
    }
    console.log(bag);
}


let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let R = matrix.length;
let C = matrix[0].length;
let K = 6;

specificDiagonals(R, C, matrix, K);