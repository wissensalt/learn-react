import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

class DeleteModal extends React.Component{

    render() {
        if (this.props.modalState) {
            return (
                <div>
                    <div className={`container-md`}>
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Delete Task {this.props.deleteData.value}</h5>
                                </div>
                                <div className="modal-body m-auto">
                                    <Button text="Cancel" action={() => this.props.handleModal()} variant="secondary"/>
                                    <Button text="Delete" action={() => this.props.deleteAction()} variant="danger"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        return null;
    }
}

DeleteModal.propTypes = {
    handleModal: PropTypes.func,
    deleteAction: PropTypes.func,
    modalState: PropTypes.bool.isRequired,
    deleteData: PropTypes.object.isRequired,
};

export default DeleteModal;