class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let i = 0;
        let j = heights.length-1;
        let maxArea = 0
        while(i < j){
            let currentMin = Math.min(heights[i], heights[j]);
            let currentArea = (j-i) * currentMin;
            if(currentArea > maxArea){
                maxArea = currentArea;
            }
            if(heights[i] >= heights[j]){
                j--;
            }else{
                i++;
            }
        }
        return maxArea;
    }
}
