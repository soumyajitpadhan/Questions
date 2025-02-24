// Time Complexity: O(n)
// Space Complexity: O(1)

function replaceGame(binstr) {
    let count = 0;

    for (let i = 0; i < binstr.length - 1; i++) {
        if ((binstr[i] === '0' && binstr[i + 1] === '1') || (binstr[i] === '1' && binstr[i + 1] === 0)) {
            count++;
        }
    }

    return count % 2 !== 0 ? "Ankush Wins" : "Sachin Wins";

}

let binstr = "1011001";
// let binstr = "01";
// let binstr = "1111";
// let binstr = "0011";
console.log(replaceGame(binstr)); //  count is odd (Ankush wins) or even (Sachin wins)