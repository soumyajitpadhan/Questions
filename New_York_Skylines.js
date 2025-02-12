function newYorkSkylines(n, arr) {
    let temp = "";
    for (let i = 0; i < n; i++) {
        if ((i === 0 && arr[i] > arr[i + 1]) || (i === n - 1 && arr[i] > arr[i - 1])) {
            temp += '1 ';
        }
        else if (i > 0 && i < n - 1 && arr[i] > arr[i + 1] && arr[i] > arr[i - 1]) {
            temp += '2 ';
        }
        else if (i > 0 && i < n - 1 && (arr[i] > arr[i + 1] || arr[i] > arr[i - 1])) {
            temp += '1 ';
        }
        else {
            temp += '0 ';
        }
    }
    return temp;
}


let arr = [1, 4, 3, 2, 7];
let n = arr.length;
console.log(newYorkSkylines(n, arr));