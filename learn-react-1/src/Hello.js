import {CHANGE_TEXT} from './Type';
import { changeText } from './Action';

const initialState = {
    active: 'Hello World'
};

export default (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_TEXT:
        return {
            active: changeText(action.dunia)
        }
        default: return state;
    }
}