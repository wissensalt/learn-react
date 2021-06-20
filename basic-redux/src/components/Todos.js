import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { del } from "../actions/list";

const Todos = () => {
    const todos = useSelector(state => state.list.todos);
    const dispatch = useDispatch();

    const onDelete = id => {
        dispatch(del(id));
    };

    return (
        <div>
            Todos
            <ul>
                {todos.map(todo =>
                    <li key={todo.id}>
                        {todo.value}
                        <button onClick={() => onDelete(todo.id)}>X</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Todos;