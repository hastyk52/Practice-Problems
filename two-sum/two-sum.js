/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const numsMap = {};
  for (let i = 0; i < nums.length; i++){
      if (numsMap[nums[i]] === undefined) {
          numsMap[nums[i]] = i;
      } else if (target - nums[i] === nums[i]) {
          return [numsMap[nums[i]], i]
      }
  }
  for (let i = 0; i < nums.length; i++) {
      if (numsMap[target - nums[i]] && numsMap[target - nums[i]] !== i) {
          return [i, numsMap[target - nums[i]]];
      }
  }
};

// given an array of integers and an integer target, return the two indices for the numbers that add up to target

// I: array of integerts and an integer target
// O: indices of the two numbers that sum to target in array
// C: Aways only 1 valid solution
//    2 <= nums.length <= 10^4
//    -10^9 <= nums[i] <= 10^9
//    -10^9 <= target <= 10^9
// E: length = two - dont worry about

// initialize object
    // iterate nums
      // map to object
    // iterate nums
      // if target - curr exist in map
         // return [i, index of target - curr]