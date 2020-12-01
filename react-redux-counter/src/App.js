import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './action';


function App() {
  const counter = useSelector(state => state.counterReducer);
  const loginState = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {loginState === true ? <h3>Secure Information</h3> : ''}
    </div>
  );
}

export default App;
