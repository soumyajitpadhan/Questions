function pAm(arr, n, k) {
    if (k === 0) return 1;
    if (k < 1) return 0;

    let ans = 0;

    for (let i = 0; i < n; i++) {
        ans += pAm(arr, n, k - arr[i]);
    }

    return ans;
}

let arr = [1, 2, 3];//capacity of truck
let k = 3; //weight
let n = 3;// no of truck
console.log(pAm(arr, n, k));