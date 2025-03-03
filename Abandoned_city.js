// Shortest Distance Algorithm
// Description

// You brought virtual reality glasses. There is only one game installed to it called “The Abandoned City”

// You are lost in an abandoned city. In order to escape you have to pay at least the target number of golden coins. So you decide to collect the gold in the houses of that city. The city contains N houses aligned in a straight line. Each house contains a number of gold coins.

// You need to find out the shortest distance you have to walk until you collect the needed amount of golden coins to get out.

// You can start from any house i and continue (i+1)th or  (i-1)th house but you can’t change your direction and stop at any house.

// Note that if it's not possible to collect at least the target number of gold coins then, in that case, you will ultimately lose the game and you must print -1.


// Time Complexity (TC): O(N)
// Space Complexity (SC): O(1)

function shortestDistance(coins, n, target) {
    let start = 0;
    let minDistance = Infinity;
    let currSum = 0;

    for (let end = 0; end < n; end++) {
        currSum += coins[end];

        while (currSum >= target) {
            let distance = end - start + 1;
            if (distance < minDistance) {
                minDistance = distance;
            }

            currSum -= coins[start];
            start++;
        }
    }

    if (minDistance === Infinity) {
        console.log(-1);
    }
    else {
        console.log(minDistance);
    }
}

shortestDistance([1, 2, 3, 4, 5], 5, 7); // Output: 2
shortestDistance([5, 1, 2, 3, 4], 5, 13); // Output: 5
shortestDistance([1], 1, 10); // Output: -1

