/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var closestPrimes = function(left, right) {
    
    let primes = sievePrime(right);
    let primeList = [];
    let minVal = Infinity;
    let minPrimeList = [];
    for(let i = left ; i<=right ; i++){
        if(primes[i]){
            primeList.push(i);
        }
    }

    for(let i=0; i<primeList.length-1 ; i++){
        let dup = 0;
        dup = primeList[i + 1] - primeList[i];
        if(minVal>dup){
            minVal = dup;
            minPrimeList = [primeList[i],primeList[i+1]];
            console.log(minPrimeList);
        }
    }
    if(minVal==Infinity){
        return [-1,-1];
    }
    return minPrimeList;
};

function sievePrime(n){
        let primes = new Array(n+1).fill(true);
        primes[0]=primes[1]=false;

        for(let i=2; i * i <=n; i++ ){
            if(primes[i]){
                for(j=i*i ; j<=n ; j+=i){
                    primes[j]=false;
                }
            }
        }
        return primes;
};



