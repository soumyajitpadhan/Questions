// Love of Samosa

// Amit went down to the Samosa street to have some. But he only has K units of money with him. There are N shops on the street, and unfortunately, all of them have only one samosa remaining.

// You are also given an array A, where A[i] is the cost of a samosa in the i-th shop.

// Find the maximum number of samosas that Amit can eat.

// Time Complexity: O(n log n)
// Space Complexity: O(1)

function maxSamosa(cost, n, k) {
    cost.sort((a, b) => a - b);

    let count = 0;

    for (let i = 0; i < n; i++) {
        if (k >= cost[i]) {
            k -= cost[i];
            count++;
        }
        else {
            break;
        }
    }
    return count;
}

let cost = [5, 4, 2, 4];
let n = cost.length;
let k = 10;
console.log(maxSamosa(cost, n, k));
