function removeDuplicates(str) {
    let ans = str.split('').filter((element, index, array) => {
        let firstOcc = array.indexOf(element);
        return firstOcc === index ? true : false;
    })
    return ans;
}

function minLenSubstrDistinct(str) {
    let minval = Infinity;
    let arr = removeDuplicates(str);

    for (let i = 0; i < str.length; i++) {
        let temp = "";
        for (let j = i; j < str.length; j++) {
            temp += str[j];
            let tempDuplicate = removeDuplicates(temp);
            if (tempDuplicate.length === arr.length) {
                if (temp.length < minval) {
                    minval = temp.length;
                }
            }
        }
    }
    return minval;
}

let s = "aaabbbcdcd";
console.log(`Minimum length distinct substring is: ${minLenSubstrDistinct(s)}`);