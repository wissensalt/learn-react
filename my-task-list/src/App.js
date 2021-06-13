import React from "react";
import FormInput from "./components/FormInput";
import "./style.css";
import Logo from "./components/Logo";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css"

class App extends React.Component {
    state = { tasks : [] };

    deleteTask = id => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id)
        });
    };

    addTask = newTask => {
        const newData = {
            id: this.state.tasks.length + 1,
            value: newTask
        };
        this.setState({
           tasks: [...this.state.tasks, newData]
        });
    };

    render() {
        return (
            <div className="card m-auto" style={cardStyle}>
                <div className="card-body">
                    <Logo/>
                    <TaskList tasks={this.state.tasks} deleteAction={this.deleteTask}/>
                    <FormInput addAction={this.addTask}/>
                </div>
            </div>
        )
    }
}

const cardStyle = {
    width: '30rem'
};

export default App;
