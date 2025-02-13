function transpose(matrix, n) {
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
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