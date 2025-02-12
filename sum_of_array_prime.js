function prime(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let isPrime = true;
        let digit = arr[i];

        if (digit < 2) {
            isPrime = false;
        }
        else {
            for (let j = 2; j < digit; j++) {
                if (digit % j === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            sum += digit;
        }
    }
    return sum;
}

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5];
let res1 = prime(arr1);
let res2 = prime(arr2);
let sum = res1 + res2;
console.log(sum);