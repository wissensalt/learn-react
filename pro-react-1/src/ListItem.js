import React from "react";

class ListItem extends React.Component {
    render () {
        return (
            <li>
                {this.props.quantity} X {this.props.name}
            </li>
        );
    }
}

export default ListItem;