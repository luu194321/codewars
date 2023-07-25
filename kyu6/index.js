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

//------------------------------------------------------------------//


/*
// Array.diff 20 min
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.
// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2,2,2,3],[2]) == [1,3]
function arrayDiff(a, b) {
  return a.filter((cur, i, arr) => !b.includes(cur));
}


*/

//------------------------------------------------------------------//

/*
//
// Stop gninnipS My sdroW!
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"

function spinWords(string){
//commented out code is my thought process inside the fx
//   const arrayString = string.split(' ')
  
//   const answer = arrayString.map((el)=> el.length<5? el : el.split('').reverse().join('') )

  return  string.split(' ').map(el=>el.length<5? el: el.split('').reverse().join('')).join(' ')
//   return answer.join(' ')
}
*/


//------------------------------------------------------------------//
/*
// our order, please
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
  // this was initially coded to try to create a separate array of just integers and use that to sort
  //   const numberPositionArray = words.split(' ').map(el=>{
  //     const initialIndex = el.match(/\d+/);
  //     console.log('var:',initialIndex)
  //     return initialIndex ? Number(initialIndex[0]) : null
      
  //   });

    const answer = words.split(' ').sort((a,b)=>{
      return a.match(/\d+/) - b.match(/\d+/)
    })

    return answer.join(' ')
  }
  */