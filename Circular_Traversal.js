//Spiral Matrix

function spiralMatrix(matrix, n) {
    let startingRow = n - 1;
    let startingCol = 0;
    let endingRow = 0;
    let endingCol = n - 1;

    let total = n * n;
    let count = 0;
    let temp = "";

    while (count < total) {
        //starting col print
        for (let index = startingRow; index >= endingRow && count < total; index--) {
            temp += matrix[index][startingCol] + " ";
            count++;
        }
        startingCol++;

        for (let index = startingCol; index <= endingCol && count < total; index++) {
            temp += matrix[endingRow][index] + " ";
            count++;
        }
        endingRow++;

        for (let index = endingRow; index <= startingRow && count < total; index++) {
            temp += matrix[index][endingCol] + " ";
            count++;
        }
        endingCol--;

        for (let index = endingCol; index >= startingCol && count < total; index--) {
            temp += matrix[startingRow][index] + " ";
            count++;
        }
        startingRow--;
    }
    console.log(temp);
}


let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let n = matrix.length;
spiralMatrix(matrix, n);
// 7 4 1 2 3 6 9 8 5