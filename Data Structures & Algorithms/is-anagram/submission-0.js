class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sSort = s.toLowerCase().split("").sort().join()
        let tSort = t.toLowerCase().split("").sort().join()
        return sSort == tSort
    }
}
