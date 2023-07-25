"use strict";

// Convert PascalCase string into snake_case

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
