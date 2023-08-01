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

// Dbftbs Djqifs
// Caesar Ciphers are one of the most basic forms of encryption. It consists of a message and a key, and it shifts the letters of the message for the value of the key.

// Read more about it here: https://en.wikipedia.org/wiki/Caesar_cipher

// Your task is to create a function encryptor that takes 2 arguments - key and message - and returns the encrypted message.
// Make sure to only shift letters, and be sure to keep the cases of the letters the same. All punctuation, numbers, spaces, and so on should remain the same.
// Also be aware of keys greater than 26 and less than -26. There's only 26 letters in the alphabet!
// Examples:A message 'Caesar Cipher' and a key of 1 returns 'Dbftbs Djqifs'.A message 'Caesar Cipher' and a key of -1 returns 'Bzdrzq Bhogdq'.

function encryptor(key, message) {
  if (message === "") return "";
  if (key === 0) return "no cypher";

  let answer = "";
  // check for negative key
  const lowercaseRegExp = /[a-z]/;
  const uppercaseRegExp = /[A-Z]/;
  // const exceedingIndex = arr[i] === undefined?
  //capital/lowercase
  // index exceeds length: pos/neg(2)
  // key: pos/neg(2) ---> exceeding index

  const msg =message.split('').forEach((el, i, arr) => {
    const upperCase=el.toUpperCase();
    const lowerCase = el.toLowerCase();
    const currentIndex = alphabetArray.indexOf(lowerCase);
    const newIndex = key % i;
    const reversedAlphabetArray = alphabetArray.reverse();
    // const ans = alphabetArray.indexOf(alphabetArray.indexOf(el) + key)
    if (el === " ") return (answer += el);
    /////////////////CAPITAL/////////////////////////
    
    if (el.match(uppercaseRegExp)!== null) {
      const newLetterPos = alphabetArray[currentIndex+key];

      if(alphabetArray[currentIndex+key] !== undefined){
        answer+=newLetterPos
      }
      if (alphabetArray.indexOf(lowerCase+key)===undefined){
        const ans = alphabetArray.indexOf(alphabetArray.indexOf(el) + key);
        answer+=ans

      }
    }
    //-----CAPITAL and POS key

  });

  return console.log(answer);
}

console.log("hello");

// if (el.match(uppercaseRegExp) !== null && key > 0) {
//   //---capital and exceeding index
//   if (alphabetArray[i + key] === undefined) {
//     answer += alphabetArray[newIndex].toUpperCase();
//   } else {
//     return (answer += alphabetArray[i + key]);
//   }
// }

// //----CAPITAL and NEG key
// if (el.match(uppercaseRegExp) !== null && key < 0) {
//   if (alphabetArray[i + key] === undefined) {
//     answer += reversedAlphabetArray[i + newIndex].toUpperCase();
//   } else {
//     return (answer += reversedAlphabetArray[i + key]);
//   }
// }

// /////////////////LOWERCASE/////////////////////////

// if (key > 0) {
//   if (alphabetArray[i + key] === undefined) {
//     answer += alphabetArray[newIndex].toUpperCase();
//   } else {
//     return (answer += alphabetArray[i + key]);
//   }
// }

// if (key < 0) {
//   if (alphabetArray[i + key] === undefined) {
//     answer += reversedAlphabetArray[i + newIndex];
//   } else {
//     return (answer += reversedAlphabetArray[i + key]);
//   }
// }

function encryptor (key, message) {
  if (message === "") return '';
  if(key===0)return 'no cypher'
  
  let index;
  let answer='';
  // check for lower case
  const alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
                         'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                         'o', 'p', 'q', 'r', 's', 't', 'u', 
                         'v', 'w', 'x', 'y', 'z'];
  
  const lowercaseRegExp = /[a-z]/
  const uppercaseRegExp = /[A-Z]/;
  const msg = message.split('').forEach((el, i, arr) => {
      const upperCase=el.toUpperCase();
      const lowerCase = el.toLowerCase();
      const newIndex = key % i;
      const currentIndex = alphabetArray.indexOf(lowerCase)
  //     const reversedAlphabetArray = alphabetArray.reverse();
      if (el === " ") return (answer += el);
      /////////////////CAPITAL/////////////////////////
        if (el.match(uppercaseRegExp)!== null) {
        console.log('el:',el,'----','curI:',currentIndex +key)
        console.log(alphabetArray[currentIndex+key])
  //       if (alphabetArray.indexOf(lowerCase+key)===undefined){
  //         const ans = alphabetArray.indexOf(alphabetArray.indexOf(el) + key);
  //         console.log('answer:',i,ans)
  //         answer+=ans
  
        
      }
      //-----CAPITAL and POS key
  
    });
  
    return '';
  }