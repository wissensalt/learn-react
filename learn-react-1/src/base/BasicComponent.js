import React, { Component } from 'react';

class BasicComponent extends Component {
    
    render() {
        const ButtonDanger = () =>  {
            return (
            <button className= "btn btn-danger" style={{textAlign:'center'}}>Danger Button</button>);
        }

        return <ButtonDanger />;
    }
}

export default BasicComponent;