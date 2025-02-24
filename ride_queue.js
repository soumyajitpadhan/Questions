function rideQueue(heights, n) {
    let round = 1;
    for (let i = 1; i < n; i++) {
        if (heights[i] <= heights[i - 1]) {
            round++;
        }
    }
    console.log(round);
}

let heights = [1, 3, 2, 4, 4, 5, 3, 6];
let n = heights.length;
rideQueue(heights, n);