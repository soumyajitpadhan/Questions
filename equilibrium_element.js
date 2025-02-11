function equilibrium(arr) {
    let index = null;

    for (let i = 0; i < arr.length; i++) {

        let sum1 = 0;
        for (let j = i + 1; j < arr.length; j++) {
            sum1 += arr[j];
        }

        let sum2 = 0;
        for (let j = i - 1; j >= 0; j--) {
            sum2 += arr[j];
        }

        if (sum1 === sum2) {
            index = i;
            break;
        }
    }

    if (index === null) {
        console.log(-1);
    }
    else {
        console.log(index);
    }
}

let arr = [15, 1, 5, 5, 5];
equilibrium(arr);