/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let nums3 = [...nums1,...nums2];

    nums3.sort((a, b) => a - b);

    let numsLen = nums3.length;

    if(numsLen%2 == 0){
        return((nums3[(numsLen/2)]+nums3[(numsLen/2)-1])/2);
    }else{
        return(nums3[Math.floor(numsLen/2)]);
    }
};