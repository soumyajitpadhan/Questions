function countBits(n) {
    let ans = [];
    for (let i = 0; i <= n; i++) {
        let num = i;
        let count = 0;

        while (num > 0) {
            count += num & 1;
            num = num >> 1;
        }
        ans.push(count);
    }
    return ans.join(' ');
}

let n = 5;
console.log(countBits(n));