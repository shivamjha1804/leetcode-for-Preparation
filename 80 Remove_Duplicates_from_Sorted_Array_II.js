/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let count = 2;

  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[count - 2]) {
      nums[count] = nums[i];
      count++;
    }
  }

  return count;
};

const arr = [0, 0, 0, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5];

const result = removeDuplicates(arr);

for (let i = 0; i < result; i++) {
  console.log(arr[i]);
}
