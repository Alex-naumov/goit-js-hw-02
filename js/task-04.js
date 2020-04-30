"use strict";
let newString = "";
const formatString = function (string) {
  if (string.length <= 40) {
    alert(string);
  } else {
    for (var i = 0; i < 40; i++) {
      newString = newString + string[i];
    }
    alert(newString);
  }
};

formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.");
