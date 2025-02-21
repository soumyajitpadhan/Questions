function tripletSum(arr, n) {
    arr.sort((a, b) => a - b);

    let isfound = false;

    for (let k = n - 1; k >= 2; k--) {
        let target = arr[k];
        let l = 0;
        let r = k - 1;

        while (l < r) {
            let sum = arr[l] + arr[r];
            if (sum === target) {
                isfound = true;
                break;
            }

            if (sum < target) {
                l++;
            }
            else {
                r--;
            }
        }
        if (isfound) {
            break;
        }
    }

    if (isfound) {
        console.log(1);
    }
    else {
        console.log(0);
    }

}

// let arr = [1, 3, 2, 4, 5];
let arr = [6, 10, 10, 10, 8, 4, 7];
let n = arr.length;
tripletSum(arr, n);