import React from "react";
import TaskItem from "./TaskItem";
import PropTypes from "prop-types";

class TaskList extends React.Component{
    render() {
        return (
            <div>
                {this.props.tasks.map(task => (
                    <TaskItem
                        key={task.id}
                        task={task}
                        deleteAction={this.props.deleteAction}
                        editAction={this.props.editAction}
                    />
                ))}
            </div>
        )
    }
}

TaskList.propTypes = {
    tasks: PropTypes.array.isRequired,
    deleteAction: PropTypes.func,
    editAction: PropTypes.func
};

export default TaskList;