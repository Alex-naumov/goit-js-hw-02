"use strict";

let total = 0;
const numbers = [];
let input;
let typeInput;
let resTypeInput;

while (input !== null) {
  input = prompt("Введите число");
  typeInput = Number(input);
  resTypeInput = Number.isNaN(typeInput);
  if (resTypeInput) {
    alert("Было введено не число, попробуйте еще раз");
  } else {
    numbers.push(input);
  }
}
if (numbers.length !== 0) {
  for (let element of numbers) {
    total = total + Number(element);
  }
  console.log(`Общая сума чисел равна ${total}`);
}
