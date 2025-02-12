/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const setFunc = new Set();
    const numLen = nums.length;

    for(let i=0 ; i<numLen ; i++){
        if(setFunc.has(nums[i])){
            return true;
        }
        setFunc.add(nums[i]);
    }
    return false;

    // const hashFunc = new Map();
    // const numLen = nums.length;
    
    // for (let i=0 ; i<numLen ; i++){
    //     if(hashFunc.has(nums[i])){
    //         return true;
    //     }
    //     else{
    //         hashFunc.set(nums[i],i);
    //     }
        
    // }
    // return false;
};