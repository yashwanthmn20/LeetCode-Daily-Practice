// /**
//  * @param {number} left
//  * @param {number} right
//  * @return {number[]}
//  */
// var closestPrimes = function(left, right) {
    
//     let primes = sievePrime(right);
//     let primeList = [];
//     let minVal = Infinity;
//     let minPrimeList = [];
//     for(let i = left ; i<=right ; i++){
//         if(primes[i]){
//             primeList.push(i);
//         }
//     }

//     for(let i=0; i<primeList.length-1 ; i++){
//         let dup = 0;
//         dup = primeList[i + 1] - primeList[i];
//         if(minVal>dup){
//             minVal = dup;
//             minPrimeList = [primeList[i],primeList[i+1]];
//             console.log(minPrimeList);
//         }
//     }
//     if(minVal==Infinity){
//         return [-1,-1];
//     }
//     return minPrimeList;
// };

// function sievePrime(n){
//         let primes = new Array(n+1).fill(true);
//         primes[0]=primes[1]=false;

//         for(let i=2; i * i <=n; i++ ){
//             if(primes[i]){
//                 for(j=i*i ; j<=n ; j+=i){
//                     primes[j]=false;
//                 }
//             }
//         }
//         return primes;
// };



const isPrime = Array(1 + 10 ** 6).fill(true);
isPrime[0] = false;
isPrime[1] = false;

for (let i = 2; i * i < isPrime.length; i++) {
    if (isPrime[i]) {
        for (let j = i * i; j < isPrime.length; j += i) {
            isPrime[j] = false;
        }
    }
}

const INF = (10 ** 6) + 1;
const nextPrimePair = Array(1 + 10 ** 6).fill(INF);

for (let i = isPrime.length - 3; i >= 0; i--) {
    if (isPrime[i] && isPrime[i + 2]) {
        nextPrimePair[i] = i;
    } else {
        nextPrimePair[i] = nextPrimePair[i + 1];
    }
}

const nextPrime = Array(1 + 10 ** 6).fill(INF);
let lastPrime = INF;

for (let i = isPrime.length - 1; i >= 0; i--) {
    nextPrime[i] = lastPrime;

    if (isPrime[i]) {
        lastPrime = i;
    }
}

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function (left, right) {
    if (left <= 2 && 3 <= right) {
        return [2, 3];
    }

    const primePairStart = nextPrimePair[left];

    if (primePairStart + 2 <= right) {
        return [primePairStart, primePairStart + 2];
    }

    let minDiff = INF;
    let p1 = INF;
    let prevP = -INF;

    for (let p = isPrime[left] ? left : nextPrime[left]; p <= right; p = nextPrime[p]) {
        const diff = p - prevP;

        if (diff < minDiff) {
            minDiff = diff;
            p1 = prevP;
        }

        prevP = p;
    }

    return minDiff === INF ? [-1, -1] : [p1, p1 + minDiff];
};