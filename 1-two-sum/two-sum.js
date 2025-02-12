/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashFunc = new Map();
    const numLen = nums.length;

    for(let i=0 ; i<numLen ; i++){
        // let index = hashFunc.get(nums[i]);
        if(hashFunc.has(nums[i])){
            return [i,hashFunc.get(nums[i])];
        }

        let compNum = target - nums[i];
        hashFunc.set(compNum,i);
    }

    // for(let i=0 ; i<numLen ; i++){
    //     posTar = target - nums[i];

    //     for(let j=i+1 ; j<numLen ; j++){
    //         if(posTar==nums[j]){
    //             return[i,j];
    //         }
    //     }
    // }
};