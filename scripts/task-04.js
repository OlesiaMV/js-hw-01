"use strict";

const credits = 23580;
const pricePerDroid  = 3000;
let howMach;
let totalPrice;
let balance;

howMach = prompt ("введите количество");

if (howMach === null) {
    alert ('Отменено пользователем!');

} else if (Number(howMach) * pricePerDroid > credits) {
    alert('Недостаточно средств на счету!');

} else  {
    totalPrice = howMach * pricePerDroid;
    balance = credits - totalPrice;

    alert(`Вы купили ${howMach} дроидов, на счету осталось ${balance} кредитов.`);
}

 console.log(totalPrice);