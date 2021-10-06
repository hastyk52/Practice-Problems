/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    while(n > 0) {
        if (nums1[m - 1] > nums2[n - 1]) {
            nums1[m + n - 1] = nums1[--m];
        } else {
            nums1[m + n - 1] = nums2[--n];
        }
    }
};

// merges two arrays in non decreasing order. The elements from nums1 are placed first if nums1[i] = nums2[j];

// I; nums1 & nums2 array of integers
//    m & n number of elements in nums1 and nums2 respectively
// O: None
//    (Side Effect): mutates nums1 to the merge sort of nums1 and nums2
// E: Empty arrays are "merged"
//    n || m =0
// C: nums1.length == m + n
//    nums2.length == n
//    0 <= m, n <= 200
//    1 <= m + n <= 200
//    -10^9 <= nums1[i], nums2[j] <= 10^9

// while n2 pointer greater than -1
  // if n1 pointer > n2 pointer 
    // n1 at m + n - 1 = n1 pointer
    // decrement n1 pointer
  // else
    // n1 at m + n - 1 = n2 pointer
    // decrement n2 pointer
