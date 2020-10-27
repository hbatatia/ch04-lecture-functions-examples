function compute() {
    const operand1 = document.getElementById('operand1').value;
    const operand2 = document.getElementById('operand2').value;
    const operator = document.getElementById('op').value;


    const result_span = document.getElementById('result');
    result_span.innerHTML = calculate(operand1, operator, operand2);
    if (NaN(result_span.innerHTML.value)) {
        result_span.style.color = "red";

    }
}

function calculate(operand1, operator, operand2) {
    operand1 = Number(operand1);
    operand2 = Number(operand2);
    if (isNaN(Number(operand1)) || isNaN(Number(operand2))) {
        window.alert("Operands must be numbers !");
        return NaN;
    }

    if (!(['+', '-', '*', '/'].includes(operator))) {
        window.alert("Operator " + op + " not supported !");
        return NaN;
    }

    let result = NaN;
    switch (operator) {
        case '+':
            result = operand1 + operand2;
            break;
        case '-':
            result = operand1 - operand2;
            break;
        case '*':
            result = operand1 * operand2;
            break;
        case '/':
            result = operand1 / operand2;
            break;
    }
    return result;
}