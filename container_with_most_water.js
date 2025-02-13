function containterWithMostWater(n, arr) {
    let l = 0;
    let r = n - 1;
    let maxval = -Infinity;

    while (l < r) {

        let minval = Math.min(arr[l], arr[r]); // Breadth

        let area = minval * (r - l);

        maxval = Math.max(maxval, area);

        if (arr[l] < arr[r]) {
            l++;
        }
        else {
            r--;
        }
    }
    console.log(maxval);
}


let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let n = arr.length;
containterWithMostWater(n, arr);