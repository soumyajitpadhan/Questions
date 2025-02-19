function removeDuplicates(arr, n) {
    let i = 0;

    for (let j = 0; j < n - 1; j++) {
        if (arr[j] !== arr[j + 1]) {
            arr[i] = arr[j];
            i++;
        }
    }

    arr[i] = arr[n - 1];

    let temp = [];

    for (let k = 0; k <= i; k++) {
        temp.push(arr[k]);
    }

    console.log(temp);
    console.log(i + 1)
}


let arr = [1, 1, 2, 3, 3, 4, 5, 5, 5, 7];
let n = arr.length;
removeDuplicates(arr, n);