// Understanding the Problem Statement

// There are n people in a queue to buy movie tickets.
// Each person has a certain number of tickets they need to buy.
// The first person in the queue gets to buy 1 ticket per second.
// If a person still needs more tickets, they move to the end of the queue.
// This process repeats until everyone has bought all the tickets they need.
// You need to find how much time it takes for the k-th person (0-based index) to finish buying all their tickets.


// // T.C = O(n * max(tickets))
// // S.C = O(n)
// function timeTaken(tickets, n, k) {
//     let queue = [];

//     for (let i = 0; i < n; i++) {
//         queue.push([i, tickets[i]]);
//     }

//     // [[0, 5], [1, 1], [1, 1], [1, 1]]

//     let time = 0;

//     while (queue.length > 0) {
//         let person = queue.shift();
//         person[1]--;
//         time++;

//         if (person[0] === k && person[1] === 0) {
//             return time;
//         }

//         if (person[1] > 0) {
//             queue.push(person);
//         }
//     }
// }


// T.C = O(n)
// S.C = O(1)
function timeTaken(tickets, n, k) {
    let time = 0;

    for (let i = 0; i < n; i++) {
        if (i <= k) {
            time += Math.min(tickets[i], tickets[k]);
        }
        else {
            time += Math.min(tickets[i], tickets[k] - 1);
        }
    }
    return time;
}

// let tickets = [5, 1, 1, 1];
let tickets = [5, 2, 2, 2];
let n = 4;
// let k = 1;
let k = 2;
console.log(timeTaken(tickets, n, k));