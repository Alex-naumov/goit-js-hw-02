"use strict";

let total = 0;
let numbers = [];
let input = prompt("Введите число");
let TypeInput;
let resTypeInput;

while (input != null) {
  TypeInput = Number(input);
  resTypeInput = Number.isNaN(TypeInput);
  if (resTypeInput === true) {
    alert("Было введено не число, попробуйте еще раз");
    input = prompt("Введите число");
  } else {
    numbers.push(input);
    input = prompt("Введите число");
  }
}
if (numbers.length != 0) {
  for (let element of numbers) {
    total = total + Number(element);
  }
  console.log(`Общая сума чисел равна ${total}`);
}
