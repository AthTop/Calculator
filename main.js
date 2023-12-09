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

function operate() {
    switch(operator) {
        case '+' :
            return add(operands[operands.length-2], operands[operands.length-1]);
        case '-' :
            return subtract(operands[operands.length-2], operands[operands.length-1]);
        case '*' :
            return multiply(operands[operands.length-2], operands[operands.length-1]);
        case '/' :
            return divide(operands[operands.length-2], operands[operands.length-1]);
    }
}

function isAlphanumeric(str) {
    return str.match(/^[a-zA-Z0-9]+$/) !== null;
}

function parseNumber(e) {
    if(isAlphanumeric(e.target.value)) currentNumber += e.target.value;
}

function parseOperator(e) {
    operator = e.target.value;
    operands.push(Number(currentNumber));
    if (operands.length > 1) {
        operands.push(operate());
        console.log(operands[operands.length-1]);
    }
    currentNumber = "";
}



let currentNumber = "";
let operands = [];
let operator;

const numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => number.addEventListener('click', parseNumber))
const operators = document.querySelectorAll('.operators');
operators.forEach(e => e.addEventListener('click', parseOperator))
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    operands.push(Number(currentNumber));
    result = operate();
    console.log(result);
    operands.splice(0, operands.length);
});



