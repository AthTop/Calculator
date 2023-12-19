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

// Perform an operation
function operate(a, b) {
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

function createNumberDisplayElement(text) {
    const para = document.createElement('p');
    const node = document.createTextNode(text);
    para.appendChild(node);
    return para;
}

function updateCurrentNumberDisplay(number) {
    currentNumberDisplay.textContent = number;
}

function updateDisplayDiv(value) {
    displayDiv.insertBefore(createNumberDisplayElement(value), currentNumberDisplay);
}

const displayDiv = document.querySelector('#display');
const currentNumberDisplay = document.querySelector('#firstNumber');
let currentNumber = "";
let firstOperand;
let secondOperand;
let operator;
let result;

const numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => number.addEventListener('click', (e) => {
    currentNumber += e.target.value;
    updateCurrentNumberDisplay(currentNumber);
}));

// Listen for operator push and attach the current number and operator to display
// and prepare for the next number
const operators = document.querySelectorAll('.operators');
operators.forEach(e => e.addEventListener('click', (e) => {
    operator = e.target.value;
    firstOperand = currentNumber;
    currentNumber = "";
    updateDisplayDiv(firstOperand);
    updateDisplayDiv(operator);
    updateCurrentNumberDisplay(currentNumber);
}));

// Listen for equal push, perform operation between the 2 operands
// append the relevant elements to display
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => {
    secondOperand = currentNumber;
    updateDisplayDiv(secondOperand);
    currentNumber = operate(firstOperand, secondOperand);
    updateCurrentNumberDisplay(currentNumber);
    currentNumber = "";
});





