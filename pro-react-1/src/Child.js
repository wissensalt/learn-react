import React from "react";

class Child extends React.Component {
    render() {
        return (
            <li>
                {this.props.quantity} X {this.props.children}
            </li>
        );
    }
}

export default Child;