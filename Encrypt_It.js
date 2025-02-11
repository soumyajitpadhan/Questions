function encrypt(s, k) {
    let estr = "";

    for (let i = 0; i < s.length; i++) {
        let ascii = s[i].charCodeAt();

        //from '0' to '9'
        if (ascii >= '0'.charCodeAt() && ascii <= '9'.charCodeAt()) {
            let rotation = k % 10;
            ascii += rotation;
            if (ascii > '9'.charCodeAt()) {
                ascii -= 10;
            }
        }

        //from 'a' to 'z'
        if (ascii >= 'a'.charCodeAt() && ascii <= 'z'.charCodeAt()) {
            let rotation = k % 26;
            ascii += rotation;
            if (ascii > 'z'.charCodeAt()) {
                ascii -= 26;
            }
        }

        // from 'A' to 'Z'
        if (ascii >= 'A'.charCodeAt() && ascii <= 'Z'.charCodeAt()) {
            let rotation = k % 26;
            ascii += rotation;
            if (ascii > 'Z'.charCodeAt()) {
                ascii -= 26;
            }
        }

        estr += String.fromCharCode(ascii);
    }
    console.log(estr);
}

let s = "All-convoYs-9-be:Alert1.";
// let s = "-------------a";
// let s = "AaZz190./Usa";
let k = 4;
// let k = 100;
// let k = 26;

encrypt(s, k);