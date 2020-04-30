"use strict";

let message;

const checkForSpam = function (message) {
  message = message.toLowerCase();
  if (message.includes("spam")) {
    return message.includes("spam");
  } else if (message.includes("sale")) {
    return message.includes("sale");
  } else {
    return false;
  }
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
