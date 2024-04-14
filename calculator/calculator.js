function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation = document.getElementById('operation').value;
  
    let result;
  
    switch (operation) {
      case 'add':
        result = num1 + num2;
        break;
      case 'subtract':
        result = num1 - num2;
        break;
      case 'multiply':
        result = num1 * num2;
        break;
      case 'divide':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          displayError('Cannot divide by zero!');
          return;
        }
        break;
      default:
        displayError('Invalid operation!');
        return;
    }
  
    displayResult(result);
  }
  
  function displayResult(result) {
    const resultBtn = document.getElementById('resultBtn');
    resultBtn.textContent = `Result: ${result}`;
    resultBtn.style.display = 'block';
  }
  
  function displayError(message) {
    const resultBtn = document.getElementById('resultBtn');
    resultBtn.textContent = `Error: ${message}`;
    resultBtn.className = 'btn btn-danger btn-block mb-2';
    resultBtn.style.display = 'block';
  }
  
  