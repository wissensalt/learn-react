import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
import Button from "./Button";

class EditModal extends React.Component{

    state = {
        text : ""
    };

    getModalState = () => {
        if (this.props.modalState) {
            return "";
        }

        return "d-none";
    };

    getNewTask = e => {
        this.props.editData.value = e.target.value;
        this.setState({
            text: e.target.value
        });
    };

    saveTask = (e) => {
        e.preventDefault();
        this.props.editAction();
        this.props.handleModal();
    };

    static getDerivedStateFromProps(props, state) {
        if (props.editData.value !== undefined && props.editData.value !== state.text) {
            return {
                text: props.editData.value
            }
        }

        return null;
    }

    render() {
        return (
            <div className={`container-md ${this.getModalState()}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Edit Task</h5>
                            <button type="button" className="btn-close" onClick={() => this.props.handleModal()} aria-label="Close"/>
                        </div>

                        <div className="modal-body">
                            <div className="form-group">
                                <input
                                    type="text"
                                    value={this.state.text}
                                    className="form-control"
                                    onChange={this.getNewTask}
                                />
                            </div>
                        </div>

                        <div className="modal-footer">
                            <Button text="Close" action={() => this.props.handleModal()} variant="secondary"/>
                            <Button text="Save" action={this.saveTask} variant="primary"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default EditModal;