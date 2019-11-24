"use strict";

 let name = prompt("Ваше имя?", "");
alert(name);

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;
message = prompt ("Пароль?");

if (message === null) {
   message = confirm ('Отменено пользователем!');
} else if (message === ADMIN_PASSWORD) {
    message = confirm ('Добро пожаловать!');
} else {
    message = confirm ('Доступ запрещен, неверный пароль!');

};

alert (message);