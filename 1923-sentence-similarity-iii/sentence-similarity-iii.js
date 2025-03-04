/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    let s1Split = sentence1.split(" ");
    let s2Split = sentence2.split(" ");

    let s1Len = s1Split.length;
    let s2Len = s2Split.length;
    
    if (sentence1 === sentence2){
        return true; 
    }else{
    
        let i = 0
        let j = 0;
        let counter = 0;
        let minLen = Math.min(s1Len, s2Len);

        while (i < minLen && s1Split[i] == s2Split[i]) {
            i++;
            counter++;
        }

        while (j < minLen - i && s1Split[s1Len - 1 - j] == s2Split[s2Len - 1- j]) {
            j++;
            counter++;
        }
        //console.log(counter,minLen)
        
        return counter >= minLen?true:false; 
    }
};