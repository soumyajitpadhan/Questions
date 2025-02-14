function digitSumSort(arr, n) {
    let digitSumArray = [];

    for (let i = 0; i < n; i++) {
        let num = arr[i];
        let sum = 0;

        while (num > 0) {
            let digit = num % 10;
            sum += digit;
            num = Math.floor(num / 10);
        }
        digitSumArray.push([arr[i], sum]);
    }

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if ((digitSumArray[j][1] > digitSumArray[j + 1][1]) || (digitSumArray[j][1] === digitSumArray[j + 1][1] && digitSumArray[j][0] > digitSumArray[j + 1][0])) {
                [digitSumArray[j], digitSumArray[j + 1]] = [digitSumArray[j + 1], digitSumArray[j]];
            }
        }
    }

    let temp = "";
    for (let i = 0; i < n; i++) {
        temp += digitSumArray[i][0] + " ";
    }
    console.log(temp);
}

let arr = [1, 2, 10, 4, 11];
// let arr = [7, 24];
// let arr = [11, 2, 13, 18];
let n = arr.length;
digitSumSort(arr, n);