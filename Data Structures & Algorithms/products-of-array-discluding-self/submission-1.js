class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const output = new Array(n);

        // 1. Calculate the Prefix products (everything to the left of index i)
        let leftProduct = 1;
        for (let i = 0; i < n; i++) {
        output[i] = leftProduct;
        leftProduct *= nums[i];
        }

        // 2. Calculate the Suffix products (everything to the right) and multiply inline
        let rightProduct = 1;
        for (let i = n - 1; i >= 0; i--) {
        output[i] *= rightProduct;
        rightProduct *= nums[i];
        }

        return output;
    }
}
