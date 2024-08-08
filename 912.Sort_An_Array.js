/**
 * @param {number[]} nums
 * @return {number[]}
 */

function merge(nums, start, mid, end) {
  let leftIndex = start;
  let rightIndex = mid + 1;
  let newIndex = 0;

  let sortedArr = new Array(end - start + 1);

  while (leftIndex <= mid && rightIndex <= end) {
    if (nums[leftIndex] <= nums[rightIndex]) {
      sortedArr[newIndex] = nums[leftIndex];
      leftIndex++;
    } else {
      sortedArr[newIndex] = nums[rightIndex];
      rightIndex++;
    }
    newIndex++;
  }

  while (leftIndex <= mid) {
    sortedArr[newIndex] = nums[leftIndex];
    leftIndex++;
    newIndex++;
  }

  while (rightIndex <= end) {
    sortedArr[newIndex] = nums[rightIndex];
    rightIndex++;
    newIndex++;
  }

  for (let i = 0; i < sortedArr.length; i++) {
    nums[start + i] = sortedArr[i];
  }
}

function divideArray(nums, start, end) {
  if (start >= end) {
    return;
  }

  let mid = start + Math.floor((end - start) / 2);

  divideArray(nums, start, mid);
  divideArray(nums, mid + 1, end);

  merge(nums, start, mid, end);
}

var sortArray = function (nums) {
  if (nums == null || nums.length <= 1) {
    return nums;
  }
  divideArray(nums, 0, nums.length - 1);
  return nums;
};

console.log("Sorted Array using Merge Sort : ", sortArray([8, 2, 4, 1, 6, 3]));
