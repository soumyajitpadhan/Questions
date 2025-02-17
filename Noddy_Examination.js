function maxScore(arr, n, x) {
    let score = 0;
    let skipped = false;

    for (let i = 0; i < n; i++) {
        if (arr[i] <= x) {
            score++;
        }
        else if (!skipped) {
            skipped = true;
        }
        else {
            break;
        }
    }
    console.log(score);
}

let diffcultyLevel = [4, 3, 7, 6, 7, 2, 2, 2, 2];
let n = diffcultyLevel.length;
let x = 6;  //Maximum difficulty that noddy can solve. Noddy allow to skip only one question.
maxScore(diffcultyLevel, n, x);


