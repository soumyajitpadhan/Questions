function longestCodingStreak(logs, n) {
    let maxDailyStreak = 0;  // X: Longest streak in a single day
    let maxOverallStreak = 0; // Y: Longest continuous streak across multiple days
    let currentOverallStreak = 0; // Track the streak if continued from the previous day
    let previousEndStreak = 0; // Store streak from the previous day's end

    for (let i = 0; i < n; i++) {

        let maxStreak = 0;
        let currentStreak = 0;

        for (let j = 0; j < logs[i].length; j++) {
            if (logs[i][j] === 'C') {
                currentStreak++;
                maxStreak = Math.max(maxStreak, currentStreak);
            }
            else {
                currentStreak = 0;
            }
        }

        maxDailyStreak = Math.max(maxDailyStreak, maxStreak);

        if (previousEndStreak > 0 && logs[i][0] === 'C') {
            currentOverallStreak = previousEndStreak + maxStreak;
        }
        else {
            currentOverallStreak = maxStreak;
        }

        maxOverallStreak = Math.max(maxOverallStreak, currentOverallStreak);

        // previousEndStreak = logs[i][logs[i].length - 1] === 'C' ? maxStreak : 0;

        if (logs[i][logs[i].length - 1] === 'C') {

            let j = logs[i].length - 1;
            let count = 0;
            while (j >= 0) {
                if (logs[i][j] === 'C') {
                    count++;
                }
                else {
                    break;
                }
                j--;
            }

            previousEndStreak = count;

        }
        else {
            previousEndStreak = 0;
        }
    }

    console.log(maxDailyStreak, maxOverallStreak);

}

let logs = [
    "SSSSEEEECCCCEECCCC",
    "CCCCCSSSSEEECCCCSS",
    "SSSSSEEESSCCCCCCCS",
    "EESSSSCCCCCCSSEEEE"
];
let n = 4;
longestCodingStreak(logs, n);