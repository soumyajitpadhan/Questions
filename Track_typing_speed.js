let order = "pqrstuvwxyzabcdefghijklmno";
let S = "hello";

let sum = 0;
let currInd = 0;

for (let i = 0; i < S.length; i++) {

    let targetInd = order.indexOf(S[i]);

    let moveTime = Math.abs(currInd - targetInd);

    sum += moveTime;

    currInd = targetInd;

}

console.log(sum);