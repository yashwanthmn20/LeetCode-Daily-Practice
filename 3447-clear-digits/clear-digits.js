/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let flag = 0;
    let sArray = s.split('');
    let sLen = sArray.length;
    while(!flag){
        for(let i=0; i<sLen; i++){
            
            if(sArray[i]>=0 && sArray[i]<=9){
                sArray.splice(i,1);
                if(i!=0){
                    sArray.splice(i-1,1);
                }
             
                break;
            }
            if(i==sLen-1){
                flag=1;
            }   
             
        }
    }
    return sArray.join('');
};