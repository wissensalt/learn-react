import { produce } from 'immer';

const initialState = []

const historyReducer = produce((draft, action) => {
    switch (action.type) {
        case 'APPEND':
            draft.push(action.payload)
        case 'CLEAR':
            draft = initialState
    }
}, initialState);

export default historyReducer;