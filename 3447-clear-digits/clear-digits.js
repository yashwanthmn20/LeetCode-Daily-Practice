/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let stack1 = [];
    for (let c of s) {
        if (!isNaN(c)) {
            if (stack1.length) stack1.pop();
        } else {
            stack1.push(c);
        }
    }
    return stack1.join("");
};