import React from 'react';

class HelloDynamic extends React.Component {
    render() {
        var place = "World";
        return (             
            <h1>Hello {place}</h1>
        );
    }
}

export default HelloDynamic;