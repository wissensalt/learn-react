import { useSelector, useDispatch } from 'react-redux';
import { plus, minus, multiply, divide } from './actions';

function App() {
  const firstValue = useSelector(state => state.calculatorReducer.firstValue)
  const secondValue = useSelector(state => state.calculatorReducer.secondValue)
  const result = useSelector(state => state.calculatorReducer.result)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Simple Calculator Using React-Redux</h1>
      <div>
        <label htmlFor='first-value'>First Value : </label>
        <input type='text' id='first-value' />
      </div>
      <div>
        <label htmlFor='second-value'>Second Value : </label>
        <input type='text' id='second-value' />
      </div>
      <div>
        <button onClick={() => dispatch(plus(first - value, second - value))}>+</button>
        <button>-</button>
        <button>*</button>
        <button>/</button>
      </div>
      <h2>
        Result
      </h2>
      <h2>
        Histories
      </h2>
      <h3>
        {firstValue}
        {secondValue}
        {result}
      </h3>
    </div>
  );
}

export default App;
