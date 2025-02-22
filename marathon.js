function marathon(points, n) {
    let totalEnergy = 0;
    let totalDistance = 0;

    for (let i = 0; i < n; i++) {
        totalEnergy += points[i][0];
        totalDistance += points[i][1];
    }

    if (totalEnergy < totalDistance) {
        console.log("No starting points");
        return;
    }

    let start = 0;
    let energyBalance = 0;

    for (let i = 0; i < n; i++) {
        energyBalance += (points[i][0] - points[i][1]);

        if (energyBalance < 0) {
            start = i + 1;
            energyBalance = 0;
        }
    }
    console.log(start);
}

let points = [[1, 5], [10, 3], [3, 4]];
let n = points.length;
marathon(points, n);