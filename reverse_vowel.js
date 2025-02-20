function reverseVowel(str) {
    str = str.split('');

    let l = 0;
    let r = str.length - 1;

    while (l < r) {
        if ((str[l] === 'a' || str[l] === 'e' || str[l] === 'i' || str[l] === 'o' || str[l] === 'u') && (str[r] === 'a' || str[r] === 'e' || str[r] === 'i' || str[r] === 'o' || str[r] === 'u')) {
            [str[l], str[r]] = [str[r], str[l]];
            l++;
            r--;
        }
        else if (str[l] !== 'a' && str[l] !== 'e' && str[l] !== 'i' && str[l] !== 'o' && str[l] !== 'u') {
            l++;
        }
        else if (str[r] !== 'a' && str[r] !== 'e' && str[r] !== 'i' && str[r] !== 'o' && str[r] !== 'u') {
            r--;
        }
    }

    console.log(str);

}

// let str = "abc";
let str = "abe";
reverseVowel(str);