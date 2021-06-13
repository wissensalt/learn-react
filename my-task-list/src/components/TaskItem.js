import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css"

const TaskItem = ({task, deleteAction}) => {
    const deleteById = id => {
        deleteAction(id);
    };

    return (
        <div className="container">
            <div className="row mx-auto bg-info">
                <div className="input-group m-lg-3">
                    <div className="form-control me-1 float-start">{task.value}</div>
                    <div className="btn-group p-1">
                        <Button text="edit" variant="success"/>
                        <Button text="delete" variant="danger" action={() =>deleteById(task.id)}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

TaskItem.propTypes = {
    task: PropTypes.object.isRequired,
    deleteAction: PropTypes.func
};

export default TaskItem;