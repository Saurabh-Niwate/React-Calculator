import React, { useState } from 'react'
import "./style.css";

function Calculator() {
    const [value, setValue] = useState("");
    const [operator, setOperator] = useState("");
    const [preValue, setPreValue] = useState("");

    const handleNumber = (e) => {
        setValue(value.concat(e.target.value));
    }
    const handleOperator = (e) => {
        setPreValue(value);
        setValue("");
        setOperator(e.target.value);
    }
    const handleCalculate = (e) => {
        switch (operator) {
            case "+":
                setValue(parseFloat(preValue) + parseFloat(value));
                break;
            case "-":
                setValue(parseFloat(preValue) - parseFloat(value));
                break;
            case "*":
                setValue(parseFloat(preValue) * parseFloat(value));
                break;
            case "/":
                setValue(parseFloat(preValue) / parseFloat(value));
                break;
            default:
                setValue(value)
                break;
        }
        setPreValue("");
        setOperator("");

    }
    const handleClear = (e) => {
        setValue("");
        setPreValue("");
        setOperator("");
    }

    return (
        <div className='calculator'>
            <h1>Casio</h1>
            <input type="text" value={value} id='inputBar' disabled />
            
            <button onClick={handleClear} id="clear">Clear</button>
           
            <div className='numbers'>
            <button onClick={handleNumber} value="7">7</button>
            <button onClick={handleNumber} value="8">8</button>
            <button onClick={handleNumber} value="9">9</button>
            <button onClick={handleOperator} value="+">+</button>
            <button onClick={handleNumber} value="4">4</button>
            <button onClick={handleNumber} value="5">5</button>
            <button onClick={handleNumber} value="6">6</button>
            <button onClick={handleOperator} value="-">-</button>
            <button onClick={handleNumber} value="1">1</button>
            <button onClick={handleNumber} value="2">2</button>
            <button onClick={handleNumber} value="3">3</button>
            <button onClick={handleOperator} value="*">*</button>
            <button onClick={handleNumber} value="0">0</button>
            <button onClick={handleCalculate} id='equal'>=</button>
            <button onClick={handleOperator} value="/">/</button>
            </div>
        </div>
    )
}

export default Calculator







