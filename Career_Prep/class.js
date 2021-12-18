// Will use a for loop to iterate through the given array
"use strict";

function lowestNumber(arr) {
  let littleNum = 1;
  const lengthArr = arr.length;
  
  for (let i = 1; i < lengthArr; i++) {
    for (let j = 1; j <= lengthArr; j++) {
      if ((arr[j] === littleNum)) {
        littleNum += 1;
      } 
      else {
        return littleNum;
      }
    }
    console.log(littleNum);
  }
}

let List = [1, 2, 3, 4, 6, 7, 8];
lowestNumber(List);
