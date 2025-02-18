/**
 * @param {string} pattern
 * @return {string}
 */
var smallestNumber = function(pattern) {
    
    let arrLen = pattern.length;
    let myArr = [];
    let mySet = Array.from({ length: arrLen }, (_, index) => index + 1);
    
    let myPattern = pattern.slice("");
    let temp = [];
    let counter = 0;

    for(let i = 0 ; i <= arrLen ; i++){
        counter++;
        temp.push(counter);
        if(pattern[i]=="I"){
            while (temp.length > 0) {
                myArr.push(temp.pop());   
            }
        }else{
            console.log("Pushing to Stack",[i]);
        }
    }

    while (temp.length > 0) {
                myArr.push(temp.pop());   
            }
    return(myArr.join(''));


};