import React from "react";
import FormInput from "./components/FormInput";
import "./style.css";
import Logo from "./components/Logo";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css"
import EditModal from "./components/EditModal";
import DeleteModal from "./components/DeleteModal";

class App extends React.Component {
    state = {
        tasks : [],
        editModalState: false,
        deleteModalState: false,
        editData: {}
    };

    deleteTask = () => {
        this.handleModalDelete();
        this.setState({
            tasks: this.state.tasks.filter(task => task.id !== this.state.editData.id),
        });
    };

    addTask = newTask => {
        const newData = {
            id: this.state.tasks.length + 1,
            value: newTask
        };
        this.setState({
            tasks: [...this.state.tasks, newData],
            editModalState: this.state.editModalState,
            editData: {},
        });
    };

    editTask = () => {
        const newTasks = [...this.state.tasks.filter(task => task.id !== this.state.id), this.state.editData];
        this.setState({
            tasks : newTasks,
            editModalState: this.state.editModalState,
            editData: {},
        });
    };

    showEditTask = (id) => {
        this.setState({
            tasks: this.state.tasks,
            editModalState: !this.state.editModalState,
            editData: this.getTaskById(id)
        });
    };

    showDeleteTask = id => {
        this.setState({
            tasks: this.state.tasks,
            editModalState: this.state.editModalState,
            deleteModalState: !this.state.deleteModalState,
            editData: this.getTaskById(id)
        });
    };

    getTaskById = id => {
        if (id === undefined || id === null) {
            return "";
        }

        return this.state.tasks.find(task => task.id === id);
    };

    handleModalEdit = () => {
        this.setState({
            tasks: this.state.tasks,
            editModalState: !this.state.editModalState,
            editData: {},
        });
    };

    handleModalDelete = () => {
        this.setState({
            tasks: this.state.tasks,
            editModalState: this.state.editModalState,
            deleteModalState: !this.state.deleteModalState,
            editData: {},
        });
    };

    handleCard = () => {
        if (this.state.editModalState || this.state.deleteModalState) {
            return "fade"
        }

        return "show";
    };

    render() {
        return (
            <div>
                <EditModal
                    handleModal={this.handleModalEdit}
                    modalState={this.state.editModalState}
                    editData={this.state.editData}
                    editAction={this.editTask}
                />
                <DeleteModal
                    handleModal={this.handleModalDelete}
                    modalState={this.state.deleteModalState}
                    deleteData={this.state.editData}
                    deleteAction={this.deleteTask}
                />
                <div className={`card m-auto ${this.handleCard()}`} style={cardStyle}>
                    <div className="card-body">
                        <Logo/>
                        <TaskList
                            tasks={this.state.tasks}
                            deleteAction={this.showDeleteTask}
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
