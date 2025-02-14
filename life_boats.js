function minLifeBoats(weight, n, k) {
    weight.sort((a, b) => a - b);
    let count = 0;
    let l = 0;
    let r = n - 1;

    while (l <= r) {
        let sum = weight[l] + weight[r];

        if (sum <= k) {
            l++;
            r--;
        }
        else {
            r--;
        }
        count++;
    }
    console.log(count);
}

let weight = [3, 5, 3, 4];
let n = weight.length;
let k = 5;

minLifeBoats(weight, n, k);