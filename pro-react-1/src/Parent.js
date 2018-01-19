import React from "react";
import Child from "./Child";

class Parent extends React.Component {
    render() {
        return (
            <ul>
                <Child quantity="5">Bread</Child>
                <Child quantity="1">Eggs</Child>
                <Child quantity="2">Milk</Child>
            </ul>
        );
    }
}

export default Parent;