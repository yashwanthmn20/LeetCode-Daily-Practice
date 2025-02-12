/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    let flag = 0;
    let sArray = s.split('');
    let sLen = sArray.length;
    
    let currIndex = 0;
    while(!flag){
        if(sArray.length==0){
            break;
        }
        for(let i=currIndex; i<sLen; i++){
            if(sArray[i]>=0 && sArray[i]<=9){
                sArray.splice(i,1);
                currIndex = i-1;
                sLen--;
                if(i!=0){
                    sArray.splice(i-1,1);
                    currIndex = i-2;
                    sLen--;
                }
                break;
            }
            if(i==sArray.length-1){
                flag=1;
            }   
             
        }
    }
    return sArray.join('');
};