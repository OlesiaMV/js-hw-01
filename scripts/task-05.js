"use strict";

let cost;
let country;

country = prompt("Введите страну доставки").toLowerCase();

switch (country) {
  case "китай":
    cost = 100;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);

    break;

  case "чили":
    cost = 250;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);

    break;

  case "австралия":
    cost = 170;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);

    break;

  case "индия":
    cost = 80;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);

    break;

  case "ямайка":
    cost = 120;
    country = country.charAt(0).toUpperCase() + country.slice(1);
    confirm(`Доставка в ${country} будет стоить ${cost} кредитов.`);

    break;

  default:
    alert("В вашей стране доставка не доступна");
}
