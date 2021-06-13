import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

class FormInput extends React.Component {
    state = {
        text : ""
    };

    getInput = e => {
        this.setState({
            text: e.target.value
        })
    };

    submit = e => {
      e.preventDefault();
      if (this.state.text !== "") {
          this.props.addAction(this.state.text);
          this.setState({
              text: ""
          });
      }
    };

    render() {
        return (
            <div className="container">
                <form onSubmit={this.submit}>
                    <div className="form-group input-group mt-3">
                        <input type="Add"
                               className="form-control"
                               id="input-task"
                               value={this.state.text}
                               placeholder="Input Task"
                               onChange={this.getInput}
                        />
                        <Button text="Add" variant="success" action={this.submit}/>
                    </div>
                </form>
            </div>
        );
    }
}

FormInput.propTypes = {
  addAction: PropTypes.func
};

export default FormInput;