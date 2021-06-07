import React from "react";
import PropTypes from 'prop-types';

class AgeComponent extends React.Component {
    render() {
        return (
          <div>
              <h1>
                  My age is {this.props.age}
              </h1>
          </div>
        );
    }
}

AgeComponent.propTypes = {
  age: PropTypes.number.isRequired
};

AgeComponent.defaultProps = {
    age: 25
};

export default AgeComponent;