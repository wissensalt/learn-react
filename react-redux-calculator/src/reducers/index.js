import calculatorReducer from './calculator';
import historyReducer from './history';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    calculatorReducer, historyReducer
});

export default allReducers;