/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let lPointer = 0;
    let rPointer = 1;
    let counter = 1;

    if(nums.length == 0){
        return 0
    }
    
    while(rPointer < nums.length){
        if(nums[lPointer] === nums[rPointer]){
            
            rPointer++
        }else{
            counter++;

            lPointer++;
            nums[lPointer]=nums[rPointer];

            rPointer++;
        }
    }
    return counter;
};