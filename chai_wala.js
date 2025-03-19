// Chai Wala

// Nandu sells tea. He knows that his customer would be sad if they have to wait for more minutes than the number of cups of tea they are going to order. It takes 1 minute to make 1 tea.

// Given an array a, which represents a queue of customers where a[i] is the number of cups of tea they are going to order.

// Nandu can swap customers' positions in the queue any number of times to maximize the number of happy customers at the end of the day.

// A customer is happy if the time they waited is less than or equal to the number of cups of tea they ordered.

// Your task is to find the maximum number of happy customers possible after optimally rearranging the queue.

// Time Complexity: O(n log n)
// Space Complexity: O(1)

function maxCustomer(cup, n) {
    cup.sort((a, b) => a - b);

    let count = 0;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        if (sum <= cup[i]) {
            sum += cup[i];
            count++;
        }
    }
    return count;
}

// let cup = [1, 2, 3];
let cup = [3, 3, 1];
let n = cup.length;
console.log(maxCustomer(cup, n));
