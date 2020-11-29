'use strict';
let total = 0;

do {
  let userInput = prompt('Введите Ваши цифры');
  if (userInput === null) {
    break;
  }

  userInput = Number(userInput);
  total = total + userInput;
} while (true);

console.log(`Сумма ${total}`);