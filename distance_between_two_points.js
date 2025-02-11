function distance(x1, y1, x2, y2) {
    let coordx = x2 - x1;
    let coordy = y2 - y1;

    let squarex = coordx ** 2;
    let squarey = coordy ** 2;

    let ans = Math.sqrt(squarex + squarey);
    return ans;

}

let x1 = 2, y1 = 3, x2 = 5, y2 = 7;
console.log(distance(x1, y1, x2, y2));