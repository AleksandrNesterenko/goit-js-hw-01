'use strict';
const credits = 23580;
const pricePerDroid = 3000;
let order = prompt(`Какое количество дроидов Вы желаете приобрести?`);
order = Number(order);
let totalPrice = order * pricePerDroid;


if (order === 0) {
  console.log(`Отменено пользователем!`);
}
else if (totalPrice < credits) {
    console.log(`Вы купили ${order} дроидов, на счету осталось ${credits-totalPrice} кредитов.`);
}
else {
  console.log(`Недостаточно средств на счету!`);
}
