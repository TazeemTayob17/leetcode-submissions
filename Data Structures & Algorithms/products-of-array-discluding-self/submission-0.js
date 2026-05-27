class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const output = [];
        for(let i = 0; i < nums.length; i++){
            let splicedArr = nums.toSpliced(i, 1);
            let product = splicedArr.reduce((acc, num) => acc * num, 1);
            output[i] = product;
        }

        return output
    }
}
