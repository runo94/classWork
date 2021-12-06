'use strict';

let calculator = document.getElementById('calculator');
let buttons = document.querySelectorAll('.number');
let monitor = document.getElementById('monitor');
let events = document.querySelectorAll('.events');

buttons.forEach((button) => {
    button.addEventListener('click', onButtonClick);
});

events.forEach((event) => {
    event.addEventListener('click', onEventClick);
});


function onButtonClick(e) {
    monitor.value = Number(e.target.innerHTML);
}

function onEventClick(e) {
    let val = monitor.value;
    
    e.target.id
}

function suma(a) {
    return function (b) {
        return a + b
    }
}

function mult(a) {
    return function (b) {
        return a * b
    }
}

function calc(func) {
    return function (a) {
        return function (b) {
            return func(a)(b);
        }
    }
}

console.log(calc(suma)(1)(2));


