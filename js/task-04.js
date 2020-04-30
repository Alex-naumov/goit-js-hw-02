"use strict";
let newString = "";
const formatString = function (string) {
  if (string.length <= 40) {
    alert(string);
  } else {
    for (var i = 0; i < 40; i++) {
      newString = newString + string[i];
    }
    return newString;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
