"use strict";

/* 
// Even or Odd 

// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const evenOrOdd=(number)=> number%2===0? 'Even' : 'Odd'

*/

/*
// Draw stairs - 20 min

// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.
// For example n = 3 result in: "I\n I\n  I"

function drawStairs(n) {
  if (n === 1) return "I";
  let answer = "";
  let regExpString = "I\n";
  // add characters by I\n
  for (let i = 1; i <= n; i++) {
    if (i === n) return (answer += "I".padStart(i, " "));
    answer += regExpString.padStart(i + 1, " ");
  }
  return answer;
}

*/

