let displayValue = '';

function appendValue(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById('display').value = displayValue;
}

function calculateResult() {
    try {
        const result = eval(displayValue.replace('cos','Math.cos').replace('tan','Math.tan').replace('sin','Math.sin')
        .replace('log','Math.log').replace('sqrt','Math.sqrt'));
        displayValue = result.toString();
        document.getElementById('display').value = displayValue;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}