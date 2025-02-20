function seperationOfOddEven(n, arr, q) {
    let even = "";
    let odd = "";

    for (let i = 0; i < n; i++) {
        if (arr[i] % 2 === 0) {
            even += arr[i] + " ";
        }
        else {
            odd += arr[i] + " ";
        }
    }

    if (q === 1) {
        console.log(even + odd);
    }
    else {
        console.log(odd + even);
    }

}


let arr = [1, 2, 3, 4, 5];
let n = arr.length;
let q = 1;

seperationOfOddEven(n, arr, q);