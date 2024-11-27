const resultElement = document.getElementById('result');
const input1 = document.getElementById('input1');
const input2 = document.getElementById('input2');
const submitBtn = document.getElementById('submit');
const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');
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

 sumbitBtn.onclick = function() {
    let sum;
    if (action == '+') {
        sum = Number(input1.value) + Number(input2.value);
    } else if (action == '-') {
        sum = Number(input1.value) - Number(input2.value);
    }
    paintResult(sum);
}
