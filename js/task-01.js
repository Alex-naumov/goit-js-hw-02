"use strict";
let number;
const logItems = function (array) {
  for (var i = 0; i + 1 <= array.length; i++) {
    number = i + 1;
    alert(`${number} - ${array[i]} `);
  }
};

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);

logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);