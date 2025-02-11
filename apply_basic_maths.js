function applyBasicmaths(arr) {
    let index = null;
    let minval = Infinity;

    for (let i = 0; i < arr.length; i++) {
        let sum = 0;

        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
        }

        for (let j = i - 1; j >= 0; j--) {
            sum += arr[j];
        }

        if (sum % 7 === 0) {
            if (arr[i] < minval) {
                minval = arr[i];
                index = i;
            }
        }
    }

    if (index === null) {
        console.log(-1);
    }
    else {
        console.log(index);
    }

}

let arr = [14, 7, 8, 2, 4];
applyBasicmaths(arr);