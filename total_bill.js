let n = 178;

let bill = 0;

if (n > 150) {
    bill += ((n - 150) * 10);
    n = 150;
}

if (n > 50) {
    bill += ((n - 50) * 5);
    n = 50;
}

bill += ((n * 3) + 80);

console.log(bill);