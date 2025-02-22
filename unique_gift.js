function uniqueGifts(gifts) {
    let frequency = {};
    let uniqueQueue = [];
    let result = "";

    for (let i = 0; i < gifts.length; i++) {

        if (frequency[gifts[i]]) {
            frequency[gifts[i]]++;
        }
        else {
            frequency[gifts[i]] = 1;
            uniqueQueue.push(gifts[i]);
        }

        while(uniqueQueue.length > 0 && frequency[uniqueQueue[0]] > 1){
            uniqueQueue.shift();
        }

        if(uniqueQueue.length > 0){
            result += uniqueQueue[0];
        }
        else{
            result += '#';
        }
    }
    console.log(result);
}

// let gifts = "abadbc";
let gifts = "abcabc";
uniqueGifts(gifts);