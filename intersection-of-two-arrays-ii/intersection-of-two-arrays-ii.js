/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    const numMap = {};
    const intersection = [];
    nums2.forEach((num) => {
        if (numMap[num]) {
            numMap[num]++;
        } else {
            numMap[num] = 1;
        }
    });
    for (let i = 0; i < nums1.length; i++) {
        if (numMap[nums1[i]]) {
            intersection.push(nums1[i])
            numMap[nums1[i]] -= 1;
        }
    }
    return intersection;
};

// I: nums1 and nums 2. arrays of integers
// O: array of intersection
// E: 
// C: 1 <= nums1.length, nums2.length <= 1000
//    0 <= nums1[i], nums2[i] <= 1000