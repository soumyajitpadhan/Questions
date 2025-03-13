function minDaysToProduce(machines, goal) {
    let s = 1;
    let e = Math.min(...machines) * goal;

    while (s < e) {
        let mid = s + Math.floor((e - s) / 2);

        let total = 0;
        for (let machine of machines) {
            total += Math.floor(mid / machine);
        }

        if (total >= goal) {
            e = mid;
        }
        else {
            s = mid + 1;
        }
    }
    return s;
}

const machines = [2, 3, 2];
const goal = 10;
// const machines = [2, 3];
// const goal = 5;
console.log(minDaysToProduce(machines, goal));

// Time Complexity (TC)
// Binary search runs O(log M) times. where M ≈ min(machines) * goal.
// Each iteration takes O(N) (to calculate the total number of items produced in mid days).
// So, total complexity = O(N log M).

// Space Complexity: O(1) (No extra space used).
