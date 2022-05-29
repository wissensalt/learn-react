import React, {useState} from "react";

export default function Calculator() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(0);
    const [operator, setOperator] = useState('add');
    const [result, setResult] = useState(0);
    return (
        <div>
            <div>
                <label htmlFor="number1">Number 1:
                    <input id="number1" type="number" value={value1} onInput={event => {setValue1(event.target.value)}}/>
                </label>
            </div>

            <div>
                <label htmlFor="number2">Number 2:
                    <input id="number2" type="number" value={value2} onInput={event => {setValue2(event.target.value)}}/>
                </label>
            </div>

            <div>
                <label htmlFor="operator">Operator:
                    <select onChange={event => {setOperator(event.target.value)}}>
                        <option value="add"> + </option>
                        <option value="minus"> - </option>
                        <option value="multiply"> * </option>
                        <option value="divide"> / </option>
                    </select>
                </label>
            </div>

            <button type="button" onClick={() => setResult(Calculate(value1,value2, operator))}>Calculate</button>

            <div>
                <h1>Value 1 : {value1}</h1>
                <h1>Value 2 : {value2}</h1>
                <h1>Operator : {operator}</h1>
                <h1>Result is : {result}</h1>
            </div>
        </div>
    )
}

/**
 * @return {number}
 */
function Calculate(value1, value2, operator) {
    if (operator === 'add') {
        return value1 + value2;
    }

    if (operator === 'minus') {
        return value1 - value2;
    }

    if (operator === 'multiply') {
        return value1 * value2;
    }

    if (operator === 'divide') {
        return value1 / value2;
    }

    return 0;
}