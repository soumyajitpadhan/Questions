function customSort(namesArr, marksArr, n) {
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (marksArr[j] < marksArr[j + 1] || ((marksArr[j] === marksArr[j + 1]) && (namesArr[j] > namesArr[j + 1]))) {
                [marksArr[j], marksArr[j + 1]] = [marksArr[j + 1], marksArr[j]];
                [namesArr[j], namesArr[j + 1]] = [namesArr[j + 1], namesArr[j]];
            }
        }
    }
}

function makeLeaderboard(namesArr, marksArr, n) {
    let rank = 1;
    for (let i = 0; i < n; i++) {
        console.log(rank, namesArr[i]);
        if (i != n - 1 && marksArr[i] > marksArr[i + 1]) {
            rank = i + 2;
        }
    }
}

let namesArr = ['rancho', 'chatur', 'raju', 'farhan', 'virus', 'joy'];
let marksArr = [45, 32, 30, 28, 32, 45];
let n = marksArr.length;
customSort(namesArr, marksArr, n);
makeLeaderboard(namesArr, marksArr, n);