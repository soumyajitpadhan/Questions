// Party or Not

// Ashutosh has N friends and he wants to give a party to his C friends on his birthday. Ashutosh knows the amount he will have to spend on each of his N friends in the party. Given the expense amount of each of the N friends, determine if it is possible for Ashutosh to give a party to his C friends if he has just R rupees.

// Time Complexity: O(n log n)
// Space Complexity: O(1)

function party(amount, n, c, r) {
    amount.sort((a, b) => a - b);

    let total = 0;
    for (let i = 0; i < c; i++) {
        total += amount[i];
    }

    return total <= r ? "Party" : "Sad";
}

let amount = [6, 4, 21, 20, 13];
let n = amount.length;
let c = 3;
let r = 24;
console.log(party(amount, n, c, r));