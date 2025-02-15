function sortMedals(n, winners) {
    let l = 0;
    let m = 0;
    let r = n - 1;

    while (m <= r) {
        if (winners[m] === 0) {
            // let temp = winners[m];
            // winners[m] = winners[l];
            // winners[l] = temp;
            [winners[l], winners[m]] = [winners[m], winners[l]];
            l++;
            m++;
        }
        else if (winners[m] === 1) {
            m++;
        }
        else if (winners[m] === 2) {
            // let temp = winners[m];
            // winners[m] = winners[r];
            // winners[r] = temp;
            [winners[r], winners[m]] = [winners[m], winners[r]];
            r--;
        }
    }
    console.log(winners);
}

let winners = [2, 0, 2, 1, 2, 0, 1, 1, 1, 0];
let n = winners.length;
sortMedals(n, winners);