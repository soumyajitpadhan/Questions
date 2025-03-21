function challenge(strengths, calories, n) {
    strengths.sort((a, b) => b - a);
    calories.sort((a, b) => b - a);

    let sum = 0;

    for (let i = 0; i < n; i++) {
        sum += (strengths[i] * calories[i]);
    }
    console.log(sum);
}

let strengths = [3, 1];
let calories = [4, 3];
let n = 2;
challenge(strengths, calories, n);

