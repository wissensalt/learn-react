import counterReducer from './counter';
import loginReducer from './login';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counterReducer, loginReducer
});

export default allReducers;