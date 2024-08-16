/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  const findBoundary = (nums, target, isLeft) => {
    let left = 0,
      right = nums.length - 1;
    let result = -1;

    while (left <= right) {
      let mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
        result = mid;
        if (isLeft) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return result;
  };

  const leftIndex = findBoundary(nums, target, true);
  if (leftIndex === -1) return [-1, -1];

  const rightIndex = findBoundary(nums, target, false);

  return [leftIndex, rightIndex];
};

let arr = [1, 3, 5, 7, 11, 163, 163, 174];
let target = 163;
let result = searchRange(arr, target);
