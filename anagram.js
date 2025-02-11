function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }

    let map = {};

    for (let i = 0; i < str1.length; i++) {
        if (map[str1[i]]) {
            map[str1[i]]++;
        }
        else {
            map[str1[i]] = 1;
        }
    }

    for (let i = 0; i < str2.length; i++) {
        if (!map[str2[i]]) {
            return false;
        }
        else {
            if (map[str2[i]] > 1) {
                map[str2[i]]--;
            }
            else {
                delete map[str2[i]];
            }
        }
    }
    return true;
}

let str1 = "car";
let str2 = "acr";

console.log(isAnagram(str1, str2));