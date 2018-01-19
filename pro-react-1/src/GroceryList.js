import React from "react";
import ListItem from "./ListItem";

class GroceryList extends React.Component {
    render() {
        return (
            <ul>
                <ListItem quantity="1" name="Bread"></ListItem>
                <ListItem quantity="2" name="Eggs"></ListItem>
                <ListItem quantity="3" name="Milk"></ListItem>
            </ul>
        );
    }
}

export default GroceryList;