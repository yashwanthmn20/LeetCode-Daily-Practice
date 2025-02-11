/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    
    flag = 0;

    while(!flag){
        if(s.includes(part)){
            s=s.replace(part,'');
        }else{
            flag = 1;
        }
    }
    return s;
};