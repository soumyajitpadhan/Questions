function findCommonElement(A, B, n) {
    let l = 0;
    let r = n - 1;
    let count = 0;

    while (l < n && r >= 0) {
        if (A[l] === B[r]) {
            count++;
            l++;
            r--;
        }
        else if (A[l] < B[r]) {
            l++;
        }
        else {
            r--;
        }
    }
    console.log(count);
}

let A = [1, 2, 2, 3, 4, 5];
let B = [4, 4, 3, 2, 1, 1];
let n = A.length;
findCommonElement(A, B, n); 