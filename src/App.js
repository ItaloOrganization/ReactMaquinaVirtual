import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult('Por favor ingrese números válidos');
      return;
    }

    let calculation;
    switch (operation) {
      case 'add':
        calculation = number1 + number2;
        break;
      case 'subtract':
        calculation = number1 - number2;
        break;
      case 'multiply':
        calculation = number1 * number2;
        break;
      case 'divide':
        if (number2 === 0) {
          setResult('No se puede dividir entre 0');
          return;
        }
        calculation = number1 / number2;
        break;
      default:
        return;
    }

    setResult(calculation);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculadora</h1>
        <div>
          <input
            type="number"
            placeholder="Número 1"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="number"
            placeholder="Número 2"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div>
          <button onClick={() => handleCalculation('add')}>Sumar</button>
          <button onClick={() => handleCalculation('subtract')}>Restar</button>
          <button onClick={() => handleCalculation('multiply')}>Multiplicar</button>
          <button onClick={() => handleCalculation('divide')}>Dividir</button>
        </div>
        {result !== null && (
          <div>
            <h2>Resultado: {result}</h2>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
