/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    
    flag = 0;

    while(!flag){
        if(s.includes(part)){
            console.log(s);
            s=s.replace(part,'');
            console.log(s);
        }else{
            flag = 1;
        }
    }
    return s;
};