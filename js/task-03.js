"use strict";

let array = [];
const findLongestWord = function (string) {
  array = string.split(" ");
  let max = "";
  for (var i = 0; i < array.length; i = i + 1) {
    if (array[i].length > max.length) {
      max = array[i];
    }
  }
  return max;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
