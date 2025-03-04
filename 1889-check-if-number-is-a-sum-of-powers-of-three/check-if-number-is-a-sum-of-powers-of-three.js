/**
 * @param {number} n
 * @return {boolean}
 */
var checkPowersOfThree = function(n) {
    let numSum = 0;
    let maxPow = Math.floor(Math.log(n)/Math.log(3));
    console.log(maxPow);

    for(let i=maxPow ; i>=0 ; i--){
        let tempSum = 3 ** i;
        if(numSum+tempSum == n){
            console.log(numSum+tempSum);
            return true;
        }else if(numSum+tempSum < n){
            numSum+=tempSum;
        }else{
            numSum = numSum;
        }
    }
    console.log(numSum);
    return false;
};