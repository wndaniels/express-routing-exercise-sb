const express = require("express");
const ExpressError = require("./expressError");

const app = express();

const {
  createCounter,
  findMode,
  convertAndValidateNums,
  findMean,
  findMedian,
} = require("./numbers");

app.use((req, res, next) => {
  next();
});

app.use(express.urlencoded({ extended: true }));

app.use("/mean", (req, res, next) => {
  try {
    if (!req.query.nums) {
      throw new ExpressError(
        "A query of a list of numbers separated by commas must be passed.",
        400
      );
    }
    let numStr = req.query.nums.split(",");
    let nums = convertAndValidateNums(numStr);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
    let result = {
      operation: "mean",
      result: findMean(nums),
    };
    return res.send(result);
  } catch (e) {
    return next(e);
  }
});

app.use("/median", (req, res, next) => {
  try {
    if (!req.query.nums) {
      throw new ExpressError(
        "A query of a list of numbers separated by commas must be passed.",
        400
      );
    }
    let numStr = req.query.nums.split(",");
    let nums = convertAndValidateNums(numStr);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
    let result = {
      operation: "median",
      result: findMedian(nums),
    };
    return res.send(result);
  } catch (e) {
    return next(e);
  }
});

app.use("/mode", (req, res, next) => {
  try {
    if (!req.query.nums) {
      throw new ExpressError(
        "A query of a list of numbers separated by commas must be passed.",
        400
      );
    }
    let numStr = req.query.nums.split(",");
    let nums = convertAndValidateNums(numStr);
    if (nums instanceof Error) {
      throw new ExpressError(nums.message);
    }
    let result = {
      operation: "mode",
      result: findMode(nums),
    };
    return res.send(result);
  } catch (e) {
    return next(e);
  }
});

app.use((err, req, res, next) => {
  let status = err.status || 500;
  let msg = err.msg || "Internal Server Error";
  return res.status(status).json({
    error: { msg, status },
  });
});

app.listen(3000, () => {
  // always define this correctly, or it could be problematic
  console.log("Server running on port 3000");
});
