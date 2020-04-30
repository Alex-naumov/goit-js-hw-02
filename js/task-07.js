"use strict";

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];
const isLoginValid = function (login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  } else {
    return false;
  }
};

console.log(isLoginValid("alex"));

const isLoginUnique = function (allLogins, login) {
  if (allLogins.includes(login) === true) {
    return false;
  } else {
    return true;
  }
};
console.log(isLoginUnique(logins, "Ajax"));

const addLogin = function (allLogins, login) {
  if (isLoginValid(login) === true) {
    if (isLoginUnique(allLogins, login) === true) {
      allLogins.push(login);
      return "Логин успешно добавлен!";
    } else {
      return "Такой логин уже используется!";
    }
  } else {
    return "Ошибка! Логин должен быть от 4 до 16 символов";
  }
};
console.log(addLogin(logins, "Ajax")); // 'Логин успешно добавлен!'
console.log(addLogin(logins, "robotGoogles")); // 'Такой логин уже используется!'
console.log(addLogin(logins, "Zod")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Ошибка! Логин должен быть от 4 до 16 символов'
