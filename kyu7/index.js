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

// Dbftbs Djqifs

function encryptor (key, message) {
  let newIndex;
  let answer='';
  // check for negative key
  let alphabetArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 
                         'h', 'i', 'j', 'k', 'l', 'm', 'n', 
                         'o', 'p', 'q', 'r', 's', 't', 'u', 
                         'v', 'w', 'x', 'y', 'z'];
  
  const lowercaseRegExp = /[a-z]/
  const uppercaseRegExp = /[A-Z]/
  
  // const exceedingIndex = arr[i] === undefined?

  //capital/lowercase
  // index exceeds length: pos/neg(2)
  // key: pos/neg(2) ---> exceeding index
    
  const msg = message.forEach((el,i,arr)=>{
    if(el === ' ') return answer+= el;

    //-----check for capital----
    if(el.match(uppercaseRegExp)!== null && key>alphabetArray.length){
      //---capital and exceeding index
      if (arr[el+key] === undefined)
      
      //capital and key>alphabet.length
      if (key>alphabetArray.length){
        newIndex= key%alphabetArray.length
        return answer+= alphabetArray[i+newIndex].toUpperCase();
      } else if (key>0 && key<alphabetArray.length){
        return answer+= alphabetArray[i+]
      }
      //capital and negative
      
      if (key<0 && key>-25){
        
        alphabetArray = alphabetArray.reverse()
        return answer+= alphabetArray[]
      }
      
      return answer+= alphabetArray[]
  
      
      
    }
    
    // check for key higher than alphabet
    if (key>alphabetArray.length)newIndex= key%alphabetArray.length
    
    if(key<0)
    // check for lower case
  
    if (el.match(lowercaseRegExp)!== null){
      
      
    }
    
  })
    
  
    return '';
  }