import { produce } from 'immer';

const initialState = {
    firstValue: 0,
    secondValue: 0,
    result: 0
}

const calculatorReducer = produce((draft, action) => {
    switch (action.type) {
        case 'PLUS':
            draft.firstValue = action.payload.firstValue;
            draft.secondValue = action.payload.secondValue;
            draft.result = draft.firstValue + ' + ' + draft.secondValue + ' = ' + (draft.firstValue + draft.secondValue);
        case 'MINUS':
            draft.firstValue = action.payload.firstValue;
            draft.secondValue = action.payload.secondValue;
            draft.result = draft.firstValue + ' - ' + draft.secondValue + ' = ' + (draft.firstValue - draft.secondValue);
        case 'MULTIPLY':
            draft.firstValue = action.payload.firstValue;
            draft.secondValue = action.payload.secondValue;
            draft.result = draft.firstValue + ' * ' + draft.secondValue + ' = ' + (draft.firstValue * draft.secondValue);
        case 'DIVIDE':
            draft.firstValue = action.payload.firstValue;
            draft.secondValue = action.payload.secondValue;
            draft.result = draft.firstValue + ' / ' + draft.secondValue + ' = ' + (draft.firstValue / draft.secondValue);
    }
}, initialState);

export default calculatorReducer;