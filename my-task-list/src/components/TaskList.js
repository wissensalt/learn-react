import React from "react";
import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

class TaskList extends React.Component{
    render() {
        return (
            <div>
                {this.props.tasks.map(task => (
                    <TaskItem key={task.id} task={task} deleteAction={this.props.deleteAction}/>
                ))}
            </div>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired
};

export default TaskList;