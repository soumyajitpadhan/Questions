// Casino and the Dealer - Problem Statement
// You are the dealer at a casino, and there are n people seated in a row, each holding a single card. You also have an array T, where T[i] represents the minute at which the i-th person folds their card and places it on the table. Once a card is placed on the table, it can be used to form decks for further gameplay.

// Your task is to create m decks, where:

// Each deck consists of exactly k adjacent cards from the table.
// Each card can be used in only one deck (no overlapping).
// You need to determine the minimum amount of time you need to wait so that m decks can be formed. If it is impossible to create m decks, return -1.

// Time Complexity (TC) - O(n log(maxT))
// Space Complexity (SC) - O(1)


function isPossible(t, n, m, k, mid) {
    let decks = 0;
    let cards = 0;

    for (let i = 0; i < n; i++) {
        if (t[i] <= mid) {
            cards++;
            if (cards === k) {
                decks++;
                cards = 0;
            }
        }
        else {
            cards = 0;
        }
    }
    return decks >= m;
}

function minimumWaitTime(t, n, m, k) {
    let s = 1;
    let e = Math.max(...t);
    let ans = -1;

    while (s <= e) {
        let mid = s + Math.floor((e - s) / 2);

        if (isPossible(t, n, m, k, mid)) {
            ans = mid;
            e = mid - 1;
        }
        else {
            s = mid + 1;
        }
    }
    return ans;
}

let t = [1, 10, 3, 10, 2];
let n = 5;
let m = 3;
let k = 1;
console.log(minimumWaitTime(t, n, m, k));
