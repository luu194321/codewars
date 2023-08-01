"use strict";
/*
// Highest and Lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

function highAndLow(numbers) {
  let answer = [];
  const array = numbers.split(" ").map(Number);

  array.sort((a, b) => a - b);
  answer.push(array[array.length - 1]);
  answer.push(array[0]);

  return answer.join(" ");
}
*/

/*
// Vowel Count
// Return the number (count) of vowels in the given string.We will consider a, e, i, o, u as vowels for this Kata (but not y). The input string will only consist of lower case letters and/or spaces.
function getCount(str) {
  const vowels = ["a", "e", "i", "o", "u"];

  const answer = str.split("").reduce((acc, cur, i, arr) => {
    if (vowels.includes(cur)) acc += 1;

    return acc;
  }, 0);

  return answer;
}
*/
/*
// Mumbling

// This time no story, no theory. The examples below show you how to write function accum:
// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.
function accum(s) {
  const array = s.split("");
  const answer = array.map((el, i, arr) => {
    const lowerCase = el.toLowerCase();
    const upperCase = el.toUpperCase();
    const padCount = i;
    const paddedEl = lowerCase.padEnd(padCount, lowerCase);

    while (i === 0) return upperCase;

    return el === upperCase ? el + paddedEl : upperCase + paddedEl;
  });

  return answer.join("-");
}
*/