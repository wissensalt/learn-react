import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { add } from "../actions/list";

const Form = () => {
    const [todo, setTodo] = useState("");
    const dispatch = useDispatch();

    const handleChange = e => {
      setTodo(e.target.value);
    };

    const onSubmit = e => {
        e.preventDefault();
        dispatch(add(todo));
        setTodo("");
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" placeholder="input new todo" value={todo} onChange={handleChange}/>
            <button>Add</button>
        </form>
    )
};

export default Form;