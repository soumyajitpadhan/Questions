function cardsAndvalues(n, arr) {
    let isfound = false;

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((arr[i] * 2) === arr[j] || (arr[j] * 2) === arr[i]) {
                isfound = true;
            }
        }
    }

    if (isfound) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }

}

let arr = [1, 2, 3, 4];
let n = arr.length;
cardsAndvalues(n, arr);