function ticTacToe(matrix) {
    //Row
    for (let i = 0; i < matrix.length; i++) {
        let row = matrix[i];

        if (row[0] === row[1] && row[1] === row[2]) {
            return row[0];
        }
    }

    // Column
    for (let col = 0; col < matrix[0].length; col++) {
        if (matrix[0][col] === matrix[1][col] && matrix[1][col] === matrix[2][col]) {
            return matrix[0][col];
        }
    }

    // Diagonal
    if (matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2]) {
        return matrix[0][0]
    }

    if (matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0]) {
        return matrix[0][2];
    }

    return "Tie";

}


let matrix = [['x', 'o', 'x'], ['o', 'x', 'x'], ['o', 'o', 'o']];
console.log(ticTacToe(matrix));