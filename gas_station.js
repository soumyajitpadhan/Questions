// Gas Station Problem

// There are n gas stations along a circular route, where the amount of gas at the i-th station is gas[i].

// You have a car with an unlimited gas tank, and it costs cost[i] units of gas to travel from the i-th station to its next (i + 1)-th station. You begin the journey with an empty tank at one of the gas stations.

// Given two integer arrays gas and cost, find out the starting gas station's index if you can travel around the circuit once in the clockwise direction. Otherwise, return -1.

// Time Complexity (TC) - O(n)
// Space Complexity (SC) - O(1)

function findStart(gas, cost, n) {
    let totalGas = 0;
    let totalCost = 0;
    let startPoint = 0;
    let tank = 0;

    for (let i = 0; i < n; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0) {
            startPoint = i + 1;
            tank = 0;
        }
    }
    return totalGas >= totalCost ? startPoint : -1;
}

let gas = [1, 2, 3, 4, 5];
let cost = [3, 4, 5, 1, 2];
let n = gas.length;
console.log(findStart(gas, cost, n));

