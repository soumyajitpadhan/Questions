function cureADisease(vaccines, patients, n) {
    vaccines.sort((a, b) => a - b);
    patients.sort((a, b) => a - b);

    for (let i = 0; i < n; i++) {
        if (vaccines[i] <= patients[i]) {
            console.log("No");
            return
        }
    }
    console.log("Yes");
}


let vaccines = [123, 146, 454, 542, 456];
let patients = [100, 328, 248, 689, 200];
let n = vaccines.length;
cureADisease(vaccines, patients, n);