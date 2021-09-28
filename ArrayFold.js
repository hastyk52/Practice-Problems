class Solution {
  solve(nums) {
    const n = nums.length
    const max = Math.max(...nums);

    let minMoves;

    for (let i = 0; i < n / 2; i++) {
      let moves = 0;
      const targetSum = nums[i] + nums[n - i - 1];
      for (let j = 0; j < n / 2; j++) {
        const sum = nums[j] + nums[n - j - 1];
        if (sum !== targetSum) {
          let largest = nums[j];
          let smallest = nums[n - j - 1];
          if (nums[j] < nums[n - j - 1]) {
            largest = nums[n - j - 1];
            smallest = nums[j];
          }

          if (sum < (smallest + targetSum - max) || sum > (largest + targetSum - 1)) {
            moves += 2;
          } else {
            moves += 1;
          }
        }
      }
      if (minMoves === undefined) {
        minMoves = moves;
      } else if (moves < minMoves) {
        minMoves = moves;
      }
    }
    return minMoves;
  }
  // find max

  // init min moves
  // iterate through i < n/2
  // init moves
  // iterate through i < n/2
  // check if sum in range
  // add 1 to moves
  // else
  // add two
  // if moves is undefined
  // set min moves to moves
  // else if moves < min moves
  // min moves = moves

  // return min moves

  solve2(nums) {
    const n = nums.length
    if (n < 4) {
      return 0;
    }
    const count = {};
    const info = {
      max: nums[0],
      targetSum: 0,
      count: 0,
      choices: [],
    };
    for (let i = 0; i < n / 2; i++) {
      const sum = nums[i] + nums[n - 1 - i];

      // check for max
      if (nums[i] > info.max) {
        info.max = nums[i];
      }
      if (nums[n - 1 - i] > info.max) {
        info.max = nums[n - 1 - i];
      }

      // count amount of times a sum is seen
      if (count[sum]) {
        count[sum]++;
      } else {
        count[sum] = 1;
      }

      // keep track of sum with the highest count
      if (count[sum] > info.count) {
        info.count = count[sum];
        info.choices = [sum];
      }
      if (count[sum] = info.count) {
        info.choices.push(sum);
      }
    }

    info.choices.forEach((targetSum) => {
      let moves = 0;
      for (let i = 0; i < n / 2; i++) {
        const sum = nums[i] + nums[n - 1 - i];

        if (sum !== targetSum) {
          let largest = nums[i];
          let smallest = nums[n - 1 - i];
          if (nums[i] < nums[n - 1 - i]) {
            smallest = nums[i];
            largest = nums[n - 1 - i];
          }

          if (sum < (smallest + targetSum - info.max) || sum > (largest + targetSum - 1)) {
            moves += 2;
          } else {
            moves += 1;
          }
        }
      }
      if (info.moves === undefined) {
        info.moves = moves;
      } else if (moves < info.moves) {
        info.moves = moves;
      }
    });

    return info.moves;
  }
}



// Given a list of integers  of evn length(n) return the minimun number of operations such that for every i, nums[i] + nums[n - i - 1] equals the same number.

// I: array of number od even length
// O: count - minimun number of operations
// C: n <= 100,000
//    1 <= nums[i] <= 10,000
//    n is even
// E: n === 2



// init count object and highest
// Iterate through i < n/2
// if count of sum exists in count obj
// add 1
// if greater than highest
// reset highest
// else set to 1

// return n/2 - highest

const sol = new Solution
console.log(sol.solve([1, 3, 2, 2]))