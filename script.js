let firstNumber;
let secondNumber;
let operator;

const displayLargeEl = document.getElementById('display-low');
const displaySmallEl = document.getElementById('display-up');
const deleteButton = document.getElementById('delete-btn');
const allClearButton = document.getElementById('clear-btn');
const numberButtons = document.querySelectorAll('.num');
const operatorButtons = document.querySelectorAll('.operator');
const dotButton = document.getElementById('dot');
const calculateButton = document.getElementById('equal-btn');

numberButtons.forEach((button) => {
    button.addEventListener('click', () => {
        let inputValue = button.textContent;
        displayLargeEl.value += inputValue;
        scrollScreenToLeft();
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', () => {
        if (displaySmallEl.value.includes('+') || displaySmallEl.value.includes('-') || displaySmallEl.value.includes('*') || displaySmallEl.value.includes('/')) {
          
            firstNumber = displaySmallEl.value.slice(0, displaySmallEl.value.length - 1);
            operator = displaySmallEl.value.slice(displaySmallEl.value.length - 1);
            secondNumber = displayLargeEl.value;
            let answer = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
            displayLargeEl.value = '';
            displaySmallEl.value = answer + button.textContent;
        } else {
            if (isNaN(displayLargeEl.value)) {
                displayLargeEl.value = '';
            }
            let bottomValue = displayLargeEl.value;
            operator = button.textContent;
            displaySmallEl.value = bottomValue + operator;
            scrollScreenToLeft();
            displayLargeEl.value = '';
        }
    });
});

function scrollScreenToLeft() {
    displayLargeEl.scrollLeft = displayLargeEl.scrollWidth;
    displaySmallEl.scrollLeft = displaySmallEl.scrollWidth;
}

calculateButton.addEventListener('click', () => {
    if (displaySmallEl.value && displayLargeEl.value) {
        firstNumber = displaySmallEl.value.slice(0, displaySmallEl.value.length - 1);
        operator = displaySmallEl.value.slice(displaySmallEl.value.length - 1);
        secondNumber = displayLargeEl.value;
        let answer = operate(operator, parseFloat(firstNumber), parseFloat(secondNumber));
        displayLargeEl.value = answer;
        displaySmallEl.value = answer + '=';
    }
});

deleteButton.addEventListener('click', () => {
    if (displayLargeEl.value === '') {
        displaySmallEl.value = displaySmallEl.value.slice(0, displaySmallEl.value.length - 1);
    } else {
        displayLargeEl.value = displayLargeEl.value.slice(0, displayLargeEl.value.length - 1);
    }
});

allClearButton.addEventListener('click', () => {
    displayLargeEl.value = '';
    displaySmallEl.value = '';
});

dotButton.addEventListener('click', () => {
    if (!displayLargeEl.value.includes('.')) {
        displayLargeEl.value += '.';
    }
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function divide(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return 'Error';
    }
}

function multiply(a, b) {
    return a * b;
}

function operate(operator, num1, num2) {
    let answer;
    num1 = num1 * 1;
    num2 = num2 * 1;
    if (operator == '+') {
        answer = add(num1, num2);
    } else if (operator == '-') {
        answer = subtract(num1, num2);
    } else if (operator == '*') {
        answer = multiply(num1, num2);
    } else if (operator == '/') {
        answer = divide(num1, num2);
    }

    return answer;
}
