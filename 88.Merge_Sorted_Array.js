/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  if (m <= 0) {
    for (let i = 0; i < n; i++) {
      nums1[i] = nums2[i];
    }
  }

  if (n <= 0) {
    return;
  }

  let leftIndex = 0;
  let rightIndex = 0;
  let newIndex = 0;
  let sortedArray = new Array(m + n);

  while (leftIndex < m && rightIndex < n) {
    if (nums1[leftIndex] < nums2[rightIndex]) {
      sortedArray[newIndex] = nums1[leftIndex];
      leftIndex++;
      newIndex++;
    } else {
      sortedArray[newIndex] = nums2[rightIndex];
      rightIndex++;
      newIndex++;
    }
  }

  while (leftIndex < m) {
    sortedArray[newIndex] = nums1[leftIndex];
    leftIndex++;
    newIndex++;
  }

  while (rightIndex < n) {
    sortedArray[newIndex] = nums2[rightIndex];
    rightIndex++;
    newIndex++;
  }

  for (let i = 0; i < newIndex; i++) {
    nums1[i] = sortedArray[i];
  }
};

const nums1 = [1, 3, 7, 0, 0, 0];
const m = 3;
const nums2 = [2, 4, 6];
const n = 3;
merge(nums1, m, nums2, n);
console.log(nums1);
