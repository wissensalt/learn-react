import React from "react";

const TodoList = (props) => {

    const onChange = (id) => {
        return (e) => {
            props.onChecked(id, e.target.checked);
        }
    };

    return <div>
        {props.data.map(todo => {
            return <ul key={todo.id}>
                <input
                    type="checkbox"
                    checked={todo.status}
                    onChange={onChange(todo.id)}
                />
                {todo.activity}
                <button onClick={() => props.onRemoved(todo.id)}>Delete</button>
            </ul>
        })}
    </div>
};

export default TodoList;