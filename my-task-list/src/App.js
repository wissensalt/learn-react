import React from "react";
import FormInput from "./components/FormInput";
import "./style.css";
import Logo from "./components/Logo";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css"
import EditModal from "./components/EditModal";

class App extends React.Component {
    state = { tasks : [], modalState: false, editData: {} };

    deleteTask = id => {
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== id),
            modalState: this.state.modalState,
            editData: {},
        });
    };

    addTask = newTask => {
        const newData = {
            id: this.state.tasks.length + 1,
            value: newTask
        };
        this.setState({
            tasks: [...this.state.tasks, newData],
            modalState: this.state.modalState,
            editData: {},
        });
    };

    editTask = () => {
        const newTasks = [...this.state.tasks.filter(task => task.id !== this.state.id), this.state.editData];
        this.setState({
            tasks : newTasks,
            modalState: this.state.modalState,
            editData: {},
        });
    };

    showEditTask = (id) => {
        this.setState({
            tasks: this.state.tasks,
            modalState: !this.state.modalState,
            editData: this.getTaskById(id)
        });
    };

    getTaskById = id => {
        if (id === undefined || id === null) {
            return "";
        }

        return this.state.tasks.find(task => task.id === id);
    };

    handleModal = () => {
        this.setState({
            tasks: this.state.tasks,
            modalState: !this.state.modalState,
            editData: {},
        });
    };

    handleCard = () => {
        if (this.state.modalState) {
            return "fade"
        }

        return "show";
    };

    render() {
        return (
            <div>
                <EditModal
                    handleModal={this.handleModal}
                    modalState={this.state.modalState}
                    editData={this.state.editData}
                    editAction={this.editTask}
                />

                <div className={`card m-auto ${this.handleCard()}`} style={cardStyle}>
                    <div className="card-body">
                        <Logo/>
                        <TaskList
                            tasks={this.state.tasks}
                            deleteAction={this.deleteTask}
                            editAction={this.showEditTask}
                        />
                        <FormInput addAction={this.addTask}/>
                    </div>
                </div>
            </div>
        )
    }
}

const cardStyle = {
    width: '30rem'
};

export default App;
