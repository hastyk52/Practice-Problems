/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    var count = {};
    for (let i = 0; i < nums.length; i++) {
        if (count[nums[i]]) {
            return true;
        } else {
            count[nums[i]] = 1;
        }        
    }
    return false;
};