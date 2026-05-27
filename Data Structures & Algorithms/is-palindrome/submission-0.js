class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const stringArr = [...s].filter(char => /^[a-z0-9]$/i.test(char));
        const lowerCase = [...stringArr].map(char => char.toLowerCase());
        const stringArrReversed = lowerCase.toReversed();
        
        return lowerCase.join('') === stringArrReversed.join('');
    }
}