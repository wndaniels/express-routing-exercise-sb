function createCounter(arr) {
  return arr.reduce((a, next) => {
    a[next] = (a[next] || 0) + 1;
    return a;
  }, {});
}

function findMode(arr) {
  let counter = createCounter(arr);

  let count = 0;
  let mostFreq;

  for (let key in counter) {
    if (counter[key] > count) {
      mostFreq = key;
      count = counter[key];
    }
  }
  return +mostFreq;
}

function convertAndValidateNums(numStr) {
  let result = [];

  for (let i = 0; i < numStr.length; i++) {
    let num = Number(numStr[i]);
    if (Number.isNaN(num)) {
      return new Error(
        `The value '${numStr[i]}' at index ${i} is not a valid number.`
      );
    }
    result.push(num);
  }
  return result;
}

function findMean(nums) {
  if (nums.length === 0) return 0;
  return (
    nums.reduce((a, cur) => {
      return a + cur;
    }) / nums.length
  );
}

function findMedian(nums) {
  nums.sort((a, b) => a - b);

  let middleIndex = Math.floor(nums.length / 2);
  let median;

  if (nums.length % 2 === 0) {
    median = (nums[middleIndex] + nums[middleIndex - 1]) / 2;
  } else {
    median = nums[middleIndex];
  }
  return median;
}

module.exports = {
  createCounter,
  findMode,
  convertAndValidateNums,
  findMean,
  findMedian,
};
