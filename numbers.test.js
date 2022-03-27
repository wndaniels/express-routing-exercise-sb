const { findMean, findMedian, findMode } = require("./numbers");

describe("#findMean", () => {
  test("find the mean of an empty array", () => {
    expect(findMean([])).toEqual(0);
  });
  test("find the mean of an array of number", () => {
    expect(findMean([1, 3, 5, 7])).toEqual(4);
  });
});

describe("#findMedian", () => {
  test("find the median of an even set array", () => {
    expect(findMedian([1, 3, 5, 7, 9])).toEqual(5);
  });
  test("find the median of an odd set array", () => {
    expect(findMedian([1, 3, 5])).toEqual(3);
  });
});

describe("#findMode", () => {
  test("find the mode", () => {
    expect(findMode([1, 3, 5, 7, 7])).toEqual(7);
  });
});
