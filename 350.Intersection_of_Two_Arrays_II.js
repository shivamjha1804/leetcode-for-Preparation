/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  let set = {};

  for (let num of nums1) {
    set[num] = (set[num] || 0) + 1;
  }

  let result = [];

  for (let num of nums2) {
    if (set[num] > 0) {
      result.push(num);
      set[num]--;
    }
  }

  return result;
};

let nums1 = [1, 2, 2, 3, 4];
let nums2 = [2, 2, 2, 4];

console.log(intersect(nums1, nums2));
