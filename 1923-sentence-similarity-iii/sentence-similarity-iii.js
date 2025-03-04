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
    
    let counter = 0 ;

    let loopLen = (s1Len>s2Len)?s2Len:s1Len;

    if(sentence1==sentence2){
            return true;
    }else if(s1Split[0]==s2Split[0] || s1Split[s1Len-1]==s2Split[s2Len-1]){
        //from start
        for(let i=0 ; i<loopLen ; i++){
                if(s1Split[i]==s2Split[i]){
                    counter++;
                    matched = true;
                }else{
                    break;
                }
            }

        //from end
        for(let i=1; i<=loopLen; i++){
            //console.log(s1Split[s1Len-i],s2Split[s2Len-i],loopLen,i)
            if(s1Split[s1Len-i]==s2Split[s2Len-i]){
                    counter++;
                    matched = true;
                }else{
                    break;
                }
        }

        //final solution
        matched = (counter>=loopLen)?true:false;
        return matched;
    }else{
        return false;
    }
};