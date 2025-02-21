function substringsWithKDistinctLetter(str, n, k) {
    let count = 0;
    let charcount = {};
    let left = 0;

    for (let right = 0; right < n; right++) {
        if (charcount[str[right]]) {
            charcount[str[right]]++;
        }
        else {
            charcount[str[right]] = 1;
        }

        while (right - left + 1 > k) {
            charcount[str[left]]--;

            if (charcount[str[left]] === 0) {
                delete charcount[str[left]];
            }
            left++;
        }

        if (right - left + 1 === k && Object.keys(charcount).length === k) {
            count++;
        }

    }

    console.log(count);

}

// let str = "abcc";
let str = "aabcdabbcdc";
let n = str.length;
// let k = 2;
let k = 3;
substringsWithKDistinctLetter(str, n, k);




// Detailed Working of the Code

// Expanding the Window (Adding right Pointer)
// For each right index, the character str[right] is added to charcount.
// If a new character is added, the distinct character count increases.
// Shrinking the Window (Moving left Pointer)
// If the window size exceeds k, we remove the leftmost character (str[left]) and move left forward.
// If str[left]'s count becomes 0, it is removed from the map.
// Valid Substring Check
// If window size == k and Object.keys(charcount).length == k, we count the substring.


// Time Complexity (TC) : O(n)
// Space Complexity (SC) : O(k) // The charcount object stores at most k distinct characters.