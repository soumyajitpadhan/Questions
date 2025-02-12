function ricknRichard(arr, n) {
    let left = 0;
    let right = n - 1;

    let rickTime = 0;
    let richardTime = 0;

    let rickBanana = 0;
    let richardBanana = 0;

    while (left <= right) {
        if (rickTime <= richardTime) {
            rickTime += arr[left] / 2;
            rickBanana++;
            left++;
        }
        else {
            richardTime += arr[right];
            richardBanana++;
            right--;
        }
    }
    console.log(rickBanana, richardBanana);
}

let arr = [2, 9, 8, 2, 7];
let n = arr.length;
ricknRichard(arr, n);
