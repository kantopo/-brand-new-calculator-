const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');
const btnMultiply = document.getElementById('multiply');
const btnDivide = document.getElementById('divide');
let action = '+';

function paintResult(eql) {
    if (eql < 0) {
        resultElement.style.color = 'red';
    } else {
        resultElement.style.color = 'green';
    }
    resultElement.textContent = eql;
}

btnPlus.onclick = function () {
     action = '+';
}
btnMinus.onclick = function () {
     action = '-';
}
btnMultiply.onclick = function () {
     action = '*';
}
btnDivide.onclick = function () {
    action = '/';
}

function computeNumbersWithAction(inp1, inp2, action) {
    const num1 = Number(inp1);
    const num2 = Number(inp2);

    // Perform the operation
    if (action == '+') {
        return num1 + num2;
    } else if (action == '-') {
        return num1 - num2;
    } else if (action == '*') {
        return num1 * num2;
    } else if (action == '/') {
        // Handle division by zero
        if (num2 === 0) {
            return 'Cannot divide by zero';
        }
        return num1 / num2;
    }
}


submitBtn.onclick = function() {
    const result = computeNumbersWithAction(input1.value, input2.value, action);
    paintResult(result);
}
