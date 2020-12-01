import React, {Component} from "react";

class InputTodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        };
    }

    onChangeInputAddNew(e) {
        this.setState({value: e.target.value})
    }

    onEnterKeyPressed(e) {
        if (e.key === 'Enter') {
            this.saveNewTodo();
        }
    }

    saveNewTodo() {
        this.props.onSave(this.state.value)
        this.setState({value: ''});
    }



    render() {
        return <div>
            <input
                placeholder="Add New"
                value={this.state.value}
                onChange={this.onChangeInputAddNew.bind(this)}
                onKeyDown={this.onEnterKeyPressed.bind(this)}
            />
            <button onClick={this.saveNewTodo.bind(this)}>Save</button>
        </div>
    }
}

export default InputTodoList;