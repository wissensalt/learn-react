import React, { Component } from 'react';

class Button extends Component {
    render() {
        return <button type="submit" onClick={this.showAlert} className="btn btn-primary">{this.props.label}</button>;
    }
    showAlert() {
        alert('Hello World');
    }
}

export default Button;