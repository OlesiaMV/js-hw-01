"use strict";

let input;
let total = 0;

while (input !== null) {
  input = prompt("Введите число");
  total += Number(input);
}
if (input === null) {
  alert(`Общая сумма чисел равна ${total}`);
}

//// задание 6 вариант 2

//  let input;

// for (let total = 0; input !== null; total += Number(input)) {
//    input = prompt ("Введите число");
//  // total += Number(input);
//  console.log(total);

// if (input === null) {
//       alert (`Общая сумма чисел равна ${total += Number(input)}`)
//     }

// }
