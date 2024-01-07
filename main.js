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


const displayDiv = document.querySelector('#display');
const currentNumberDisplay = document.querySelector('#currentNumber');
let currentNumber = "";
let firstOperand = "";
let secondOperand = "";
let operator = "";
let result;

const numbers = document.querySelectorAll('.numbers');
numbers.forEach(number => number.addEventListener('click', (e) => {
    currentNumber += e.target.value;
    if (firstOperand !== "") {
        displayDiv.textContent = firstOperand + operator + currentNumber;
    }
    else {
        displayDiv.textContent = currentNumber;
    }
}));

// Listen for operator push and attach the current number and operator to display
// and prepare for the next number
const operators = document.querySelectorAll('.operators');
operators.forEach(e => e.addEventListener('click', (e) => {
    if (operator !== ""){
        equalOperate(operator)
    }
    if (firstOperand !== "") {}
    else {
        firstOperand = currentNumber;
        currentNumber = "";
        displayDiv.textContent = firstOperand + operator;
    }
    operator = e.target.value;    
}));

// Listen for equal push, perform operation between the 2 operands
// append the relevant elements to display
const equal = document.querySelector('.equal');
equal.addEventListener('click', () =>{
    equalOperate("=");
});

function equalOperate(operator) {
    secondOperand = currentNumber;
    result = operate(+firstOperand, +secondOperand).toFixed(1);
    if (operator === "=") {
        displayDiv.textContent += operator + result;
        firstOperand = result;
    }
    else {
        firstOperand = result;
        displayDiv.textContent = firstOperand + operator;
    }
    secondOperand = "";
    currentNumber = "";
    operator = "";
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    displayDiv.textContent = " ";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    currentNumber = "";
});



