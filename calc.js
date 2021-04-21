const buttons = document.querySelectorAll('button');
const display = document.querySelector('#display');
const result = document.querySelector('#results');
let disp = '';
let firstNumber = '';
let secondNumber = '';
let operator = '';

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        let usrIn = this.value;
        if (/[\d]/.test(usrIn)) {
            disp += usrIn;
            if (disp.length > 11) disp = Number(disp).toExponential(2);
            //console.log(disp);
            result.textContent = disp;
        } else if (/[\+\-\/\*]/.test(usrIn)) {
            if (firstNumber && operator) {
                secondNumber = disp;
                firstNumber = operate(firstNumber, operator, secondNumber);
                //console.log(firstNumber);
                result.textContent = firstNumber;
                disp = '';
                secondNumber = '';
                operator = usrIn;
            } else if (firstNumber && !operator) {
                operator = usrIn;
            } else {
                firstNumber = disp;
                operator = usrIn;
                disp = '';
            }
        } else if (/[=]/.test(usrIn)) {
            if (firstNumber && operator) {
                secondNumber = disp;
                firstNumber = operate(firstNumber, operator, secondNumber);
                //console.log(firstNumber);
                display.textContent = firstNumber;
                disp = '';
                secondNumber = '';
                operator = '';

            }
        } else if (/[A][C]/.test(usrIn)) {
            clear();
        }
    });
});

function clear() {
    display.textContent = '';
    result.textContent = '';
    disp = '';
    firstNumber = '';
    secondNumber = '';
    operator = '';

}

function addition(a, b) {
    return (a + b);
}

function subtraction(a, b) {
    return (a - b);
}

function multiplication(a, b) {
    return (a * b);
}

function division(a, b) {
    if (b == 0) return alert('Error! cant divide by zero');
    else {
        return (Math.round(((a / b) + Number.EPSILON) * 100) / 100);
    }
}

function operate(a, operator, b) {
    a = +a;
    b = +b;
    if (operator == '+') {
        return addition(a, b);
    } else if (operator == '-') {
        return subtraction(a, b);
    } else if (operator == '*') {
        return multiplication(a, b);
    } else if (operator == '/') {
        return division(a, b);
    } else {
        return alert('error in operate');
    }
}