/**
 * @param {number[]} nums
 * @return {number}
 */

// Given an arrayof integers, find the contiguous sub array with the largest sum and returns that sum

// I: Array of integers
// O: Largest sum resulting from contiguous subarray
// C: subarray must contain at least 1 number
//    1 <= nums.length <= 10^5
//    -10^4 <= nums[i] <= 10^4
// E: Empty array
//    array has length of 1
//    

// handle empty array

// initialize sum and max sum as first position
// iterate array starting at i = 1
  // if sum is negative
    // sum = nums[i]
  // else
    // sum += nums[i]
  // maxSum = max(sum, maxSum)

// return maxSum

var maxSubArray = function(nums) {
    if (nums.length === 0) return;
    
    let sum = nums[0];
    let max = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (sum < 0) {
            sum = nums[i];
        } else {
            sum += nums[i];
        }
        max = Math.max(sum, max);
    }
    
    return max;
};