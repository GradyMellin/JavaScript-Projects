

const Calculator = {
    displayValue: '0',
    firstOperand: null,
    waitSecondOperand: false,
    operator: null,
};

function Input_Digit(digit) {
    const { displayValue, waitSecondOperand } = Calculator;
    if (waitSecondOperand=== true){
        Calculator.displayValue = digit;
        Calculator.waitSecondOperand = false;
    } else {
        Calculator.displayValue = displayValue === '0'? digit : displayValue + digit;
    }
}

function Input_Decimal(dot) {
    if ( Calculator.waitSecondOperand === true) return;
    if (!Calculator.displayValue.includes(dot)) {
        Calculator.displayValue += dot;
    }
}

function Handle_Operator(nextOperator) {
    const { firstOperand, displayValue, operator} = Calculator
    const valueOfInput = parseFloat(displayValue);
    if (operator && Calculator.waitSecondOperand) {
        Calculator.operator = nextOperator;
        return;
    }
    if (firstOperand == null) {
        Calculator.firstOperand = valueOfInput;
    } else if (operator) {
        const valueNow = firstOperand || 0;
        const result = performCalculation[operator](valueNow,valueOfInput);

        Calculator.displayValue= String(result);
        Calculator.firstOperand = result;
    }
    Calculator.waitSecondOperand = true;
    Calculator.operator = nextOperator;
}

const performCalculation = {
    '/': (firstOperand, secondOperand) => firstOperand / secondOperand,
    '*': (firstOperand, secondOperand) => firstOperand * secondOperand,
    '+': (firstOperand, secondOperand) => firstOperand + secondOperand,
    '-': (firstOperand, secondOperand) => firstOperand - secondOperand,
    '=': (firstOperand, secondOperand) => secondOperand
};

function Calculator_Reset() {
    Calculator.displayValue = "0";
    Calculator.firstOperand = null;
    Calculator.waitSecondOperand = null;
    Calculator.operator = null;
}

function Update_Display() {
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.displayValue;
}

Update_Display();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;
    if (!target.matches('button')){
        return;
    }
    if (target.classList.contains('operator')){
        Handle_Operator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')){
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})