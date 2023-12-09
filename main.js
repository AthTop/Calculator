function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return 'Division by zero';
    return a / b;
}

function operate(a, b, operator) {
    switch(operator) {
        case '+' :
            return add(a, b);
        case '-' :
            return subtract(a, b);
        case '*' :
            return multiply(a, b);
        case '/' :
            return divide(a, b);
    }
}

function isAlphanumeric(str) {
    return str.match(/^[a-zA-Z0-9]+$/) !== null;
}

function parseNumber(e) {
    if(isAlphanumeric(e.target.value)) {
        displayNumber += e.target.value;
    }
    console.log(displayNumber);
}

let displayNumber = "";
const numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => number.addEventListener('click', parseNumber))



let firstNumber = 2;
let secondNumber = 3;
let operator = '-';

console.log(operate(firstNumber, secondNumber, operator));