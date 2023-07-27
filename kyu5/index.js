"use strict";

/*
// Convert PascalCase string into snake_case
// Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.

function toUnderscore(string) {
  if (typeof string === "number") {
    string = string.toString();
  }

  let answer = "";

  if (string.length < 2 && isNaN(Number(string[0]))) {
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    if (i === 0 && string[i] === string[i].toUpperCase()) {
      answer += string[i].toLowerCase();
    } else if (
      string[i] === string[i].toUpperCase() &&
      string[i].match(/\d/) == null
    ) {
      answer += "_" + string[i].toLowerCase();
    } else {
      answer += string[i];
    }
  }
  console.log(answer);

  return answer;
}
*/

/*
// RGB To Hex Conversion

// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
// The following are examples of expected output values:

function rgb(r, g, b) {
  const R = Math.max(0, Math.min(255, Math.round(r)));
  const G = Math.max(0, Math.min(255, Math.round(g)));
  const B = Math.max(0, Math.min(255, Math.round(b)));

  const hexR = R.toString(16).padStart(2, "0");
  const hexG = G.toString(16).padStart(2, "0");
  const hexB = B.toString(16).padStart(2, "0");

  const answer = hexR.toUpperCase() + hexG.toUpperCase() + hexB.toUpperCase();

  return answer;
}
*/


/*
// Human Readable Time
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.
function humanReadable(seconds) {
  if (seconds < 0 || seconds > 359999) {
    return null;
  }

  if (seconds === 0) {
    return "00:00:00";
  }

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  const formattedHours = String(hours).padStart(2, "0");
  const formattedMinutes = String(minutes).padStart(2, "0");
  const formattedSeconds = String(remainingSeconds).padStart(2, "0");

  const formattedTime = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;

  return formattedTime;
}
*/