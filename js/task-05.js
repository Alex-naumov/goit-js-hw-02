"use strict";

let message;

const checkForSpam = function (message) {
  message = message.toLowerCase();
  if (message.includes("spam")) {
    alert(message.includes("spam"));
  } else if (message.includes("sale")) {
    alert(message.includes("sale"));
  } else {
    alert("false");
  }
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
