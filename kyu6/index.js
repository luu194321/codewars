"use strict";
/*
// Find the odd int 
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {
  const answerObj = A.reduce((acc, cur) => {
    acc[cur] ? acc[cur]++ : (acc[cur] = 1);
    return acc;
  }, {});
  
  let answer;

  for (const key in answerObj) {
    if (answerObj[key] % 2 !== 0) {
      answer = key;
      return +answer;
    }
  }
  return 0;
}


*/


/*
// Array.diff 20 min
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(a, b) {
  return a.filter((cur, i, arr) => !b.includes(cur));
}


*/