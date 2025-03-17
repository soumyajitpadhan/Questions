function isPossible(boards, n, k, mid) {
    let painterCount = 1;
    let boardSum = 0;

    for (let i = 0; i < n; i++) {
        if (boardSum + boards[i] <= mid) {
            boardSum += boards[i];
        }
        else {
            painterCount++;
            if (painterCount > k || boards[i] > mid) {
                return false;
            }
            boardSum = boards[i];
        }
    }
    return true;
}

function paintersPartition(boards, n, k) {
    let s = 0;
    let e = boards.reduce((acc, curr) => acc + curr, 0);
    let ans = -1;

    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);
        if (isPossible(boards, n, k, mid)) {
            ans = mid;
            e = mid - 1;
        }
        else {
            s = mid + 1;
        }
    }
    return ans;
}

// let boards = [5, 5, 5, 5] // elements of array = length of the boards.
let boards = [10, 20, 30, 40];
let k = 2;                    // k = numbers of painters.
let n = 4;


console.log(paintersPartition(boards, n, k))