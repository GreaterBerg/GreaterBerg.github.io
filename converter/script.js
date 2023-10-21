// let usd = fx(100).from("USD").to("RUB");

let firstInput = document.querySelector('.first__value');
let secondInput = document.querySelector('.second__value');

let rubBtnFirst = document.querySelector('.rub__btn-first');
let usdBtnFirst = document.querySelector('.usd__btn-first');
let eurBtnFirst = document.querySelector('.eur__btn-first');

let rubBtnSecond = document.querySelector('.rub__btn-second');
let usdBtnSecond = document.querySelector('.usd__btn-second');
let eurBtnSecond = document.querySelector('.eur__btn-second');

let converterBtn = document.querySelector('.convert__btn');


// выбор валюты

let firstVal;
rubBtnFirst.addEventListener("click", () => {
    firstVal = "RUB";
})
usdBtnFirst.addEventListener("click", () => {
    firstVal = "USD";
})
eurBtnFirst.addEventListener("click", () => {
    firstVal = "EUR";
})

let secondVal;
rubBtnSecond.addEventListener("click", () => {
    secondVal = "RUB";
})
usdBtnSecond.addEventListener("click", () => {
    secondVal = "USD";
})
eurBtnSecond.addEventListener("click", () => {
    secondVal = "EUR";
})


// конвертация

converterBtn.addEventListener("click", () => {
    secondInput.value = 
    Math.round(fx(firstInput.value).from(`${firstVal}`).to(`${secondVal}`));
})