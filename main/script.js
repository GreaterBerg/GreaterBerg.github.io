let mark = document.querySelector('.mark');
let input_mark = document.querySelector('.input-mark');
const markfive = document.querySelector('.markfive');
const markfour = document.querySelector('.markfour');
const markthree = document.querySelector('.markthree');
const marktwo = document.querySelector('.marktwo');
const accept = document.querySelector('.accept');
const clear = document.querySelector('.clear');

let counter = 0;
let counter_time = 0;

markfive.addEventListener('click', () => {
    input_mark.value += '5';
    counter += 5;
    counter_time += 1;
});
markfour.addEventListener('click', () => {
    input_mark.value += '4';
    counter += 4;
    counter_time += 1;
});
markthree.addEventListener('click', () => {
    input_mark.value += '3';
    counter += 3;
    counter_time += 1;
});
marktwo.addEventListener('click', () => {
    input_mark.value += '2';
    counter += 2;
    counter_time += 1;
});

accept.addEventListener('click', () => {
    mark.innerHTML = `${counter/counter_time}`;
});
clear.addEventListener('click', () => {
    input_mark.value = "";
    counter = 0;
    counter_time = 0;
    mark.innerHTML = 'n/a';
})