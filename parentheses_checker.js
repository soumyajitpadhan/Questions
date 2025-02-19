function parenthesesChecker(str) {
    if (str.length % 2 !== 0) {
        return false;
    }

    let stack = [];

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        if (ch === '{' || ch === '[' || ch === '(') {
            stack.push(ch);
        }
        else {
            if (stack.length === 0) {
                return false;
            }

            let top = stack.pop();

            if (ch === '}' && top !== '{') {
                return false;
            }
            else if (ch === ']' && top !== '[') {
                return false;
            }
            else if (ch === ')' && top !== '(') {
                return false;
            }
        }
    }
    return stack.length === 0;
}

let str = "{([])}";
console.log(parenthesesChecker(str));