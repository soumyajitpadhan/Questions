function useSideLane(trucks, n) {
    let stack = [];
    let expected = 1;

    for (let i = 0; i < n; i++) {
        let truck = trucks[i];
        if (truck === expected) {
            expected++;
        }
        else {
            stack.push(truck);
        }

        while (stack.length > 0 && stack[stack.length - 1] === expected) {
            stack.pop();
            expected++;
        }
    }
    return stack.length === 0 ? "Yes" : "No";
}

let trucks = [5, 1, 2, 4, 3];
// let trucks = [1, 3, 5, 2, 4];
let n = trucks.length;
console.log(useSideLane(trucks, n));