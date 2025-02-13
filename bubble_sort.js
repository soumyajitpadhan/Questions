function bubbleSort(arr, n) {
    for (let i = 0; i < n - 1; i++) {
        let flag = 0;
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                flag = 1;
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                // [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Using array destructuring
            }
        }
        if (flag === 0) {
            console.log("Sorted");
            break;
        }
    }
    console.log(arr);
}

let arr = [3, 5, 0, 9, 8];
let n = arr.length;
bubbleSort(arr, n); 