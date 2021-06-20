//initial state
const initialState = {
    todos: [
        {
            id: 1,
            value: "todo-1"
        },
        {
            id: 2,
            value: "todo-2"
        }
    ]
};

//reducers
const listReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "ADD":
            const newItem = {
                id: state.todos.length + 1,
                value: payload
            };
            return {
                ...state,
                todos: [...state.todos, newItem]
            };
        case "DEL":
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            };
        default:
            return state;
    }
};

export default listReducer;