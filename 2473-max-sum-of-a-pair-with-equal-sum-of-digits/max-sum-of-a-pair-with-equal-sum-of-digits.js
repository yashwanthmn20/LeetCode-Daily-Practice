/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumSum = function(nums) {
    // nums.sort((a, b) => b - a);
    console.log(nums);
    
    const hashFunc = new Map();
    const numLen = nums.length;
    let tempArray = [];
    let tempSum = 0;
    let answer = 0;
    let flag = 0;

    for(let i=0 ; i<numLen ; i++){
        // let index = hashFunc.get(nums[i]);
        let sum = 0;
        let temp = nums[i];
        while(temp!=0){
            sum = sum + temp%10;
            temp=Math.floor(temp/10);
        }
        console.log(sum);

        if((hashFunc.has(sum))){
            answer = Math.max(answer,(nums[i])+(hashFunc.get(sum)));
            if(nums[i]>(hashFunc.get(sum))){
                hashFunc.set(sum,nums[i]);
            }
            flag = 1;
        }
        // if(answer > (nums[0]+nums[i])){
        //         return answer;
        //     }
        else{
            hashFunc.set(sum,nums[i]);
        }
        
    }
    
    if(flag==1){
        return answer;
    }else{
        return -1;
    }
    
};