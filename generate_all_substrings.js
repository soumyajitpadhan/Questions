// function generateSubstring(str, n) {
//     for (let i = 0; i < n; i++) {
//         for (let j = i; j < n; j++) {
//             let temp = "";
//             for (let s = i; s <= j; s++) {
//                 temp += str[s];
//             }
//             console.log(temp);
//         }
//     }
// }

// let str = "aman";
// let n = str.length;
// generateSubstring(str, n);   


// O(n²)
function generateSubstring(str, n) {
    for (let i = 0; i < n; i++) {
        let temp = "";
        for (let j = i; j < n; j++) {
            temp += str[j];
            console.log(temp);
        }
    }
}


let str = "aman";
let n = str.length;
generateSubstring(str, n);   