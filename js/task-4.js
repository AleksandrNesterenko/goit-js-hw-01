'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let order = prompt(`Какое количество дроидов Вы желаете приобрести?`);
let totalPrice = order * pricePerDroid;


if (order === null) {
  console.log(`Отменено пользователем!`);
}
else if (totalPrice < credits) {
  order = Number(order);
  console.log(`Вы купили ${order} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
}
else {
  console.log(`Недостаточно средств на счету!`);
}
