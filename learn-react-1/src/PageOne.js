import React, { Component } from 'react';

class PageOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nama : "World"
        }
    }
    
    render () {
        
        return (
            <div>Hello {this.state.nama}</div>
        );
    }
}