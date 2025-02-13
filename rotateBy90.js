function transpose(matrix, n) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }


    // // Anti Clockwise
    // for (let j = 0; j < n; j++) {
    //     let startRow = 0;
    //     let endRow = n - 1;

    //     while (startRow <= endRow) {
    //         let temp = matrix[startRow][j];
    //         matrix[startRow][j] = matrix[endRow][j];
    //         matrix[endRow][j] = temp;
    //         startRow++;
    //         endRow--;
    //     }
    // }

    // clockwise
    for (let i = 0; i < n; i++) {
        let startCol = 0;
        let endCol = n - 1;
        while (startCol <= endCol) {
            let temp = matrix[i][startCol];
            matrix[i][startCol] = matrix[i][endCol];
            matrix[i][endCol] = temp;
            startCol++;
            endCol--;
        }
    }


    for (let i = 0; i < n; i++) {
        let temp = "";
        for (let j = 0; j < n; j++) {
            temp += matrix[i][j] + " ";
        }
        console.log(temp);
    }

}

let matrix = [[1, 2, 3, 4], [5, 6, 7, 8], [1, 2, 3, 4], [5, 6, 7, 8]];
let n = matrix.length;

transpose(matrix, n);