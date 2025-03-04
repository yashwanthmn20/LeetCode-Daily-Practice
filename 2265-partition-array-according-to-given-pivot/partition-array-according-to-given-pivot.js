/**
 * @param {number[]} nums
 * @param {number} pivot
 * @return {number[]}
 */
var pivotArray = function(nums, pivot) {
    let left = [];
    let right = [];
    let center = [];

    for(let i = 0 ; i<nums.length ; i++){
        if(nums[i]>pivot){
            right.push(nums[i]);
        }else if(nums[i]<pivot){
            left.push(nums[i]);
        }else{
            center.push(nums[i]);
        }
    }
    // console.log(left,center,right);
    return [...left,...center,...right];
};