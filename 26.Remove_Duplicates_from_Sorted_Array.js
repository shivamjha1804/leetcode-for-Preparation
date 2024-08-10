/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  // let hashMap = {};
  // let uniqueArr = [];

  // for (let i = 0; i < nums.length; i++) {
  //     let num = nums[i];
  //     if (!hashMap[num]) {
  //         hashMap[num] = true;
  //         uniqueArr.push(num);
  //     }
  // }

  // for (let i = 0; i < uniqueArr.length; i++) {
  //     nums[i] = uniqueArr[i];
  // }

  // return uniqueArr.length;

  let count = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] != nums[i - 1]) {
      nums[count] = nums[i];
      count++;
    }
  }

  return count;
};

const arr = [0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5];

const result = removeDuplicates(arr);

for (let i = 0; i < result; i++) {
  console.log(arr[i]);
}
