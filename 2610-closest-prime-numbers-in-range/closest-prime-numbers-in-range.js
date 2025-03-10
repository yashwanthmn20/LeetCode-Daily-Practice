/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */

var closestPrimes = function(left, right) {

    if (left == right){
        return [-1,-1];
    }
    
    //generate Sieve of Eratosthenes

    let sieve = generateSieve(right+1);

    const primeArr = [];

    for(let i = left; i<=right; i++){
        if(sieve[i]){
            primeArr.push(i);
        }
    }

    let minDiff = Infinity
    let res = [-1, -1]

    for(let i=0; i<primeArr.length; i++){
        let diff = primeArr[i+1] - primeArr[i];
        if(diff<minDiff){
            minDiff = diff;
            res = [primeArr[i], primeArr[i+1]];
        }
    }

    return res

};

const generateSieve = (right) => {
    let sieve = Array(right+1).fill(true);
    sieve[0] = false
    sieve[1] = false
    for(let i=2; i*i<=right; i++){
        if(sieve[i] == true){
            for(let j=i*i; j<=right; j+=i){
                sieve[j] = false;
            }
        }
    }

    return sieve;
}