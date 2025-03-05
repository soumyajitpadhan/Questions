function knightMoves(i, j, n) {
    if (n === 0) {
        return 1;
    }

    let directions = [
        [2, 1], [2, -1], [-2, 1], [-2, -1],
        [1, 2], [1, -2], [-1, 2], [-1, -2]
    ]

    let count = 0;
    for (let [dx, dy] of directions) {
        let newX = i + dx;
        let newY = j + dy;

        if (newX >= 0 && newX < 10 && newY >= 0 && newY < 10) {
            count += knightMoves(newX, newY, n - 1);
        }
    }
    return count;
}

let i = 3;
let j = 3;
let n = 1;

console.log(knightMoves(i, j, n));