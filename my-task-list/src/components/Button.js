import React from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css"

const Button = ({variant, text, action}) => {
    return (
        <button className={`btn btn-${variant} me-1`} onClick={action}>{text}</button>
    )
};

Button.propTypes = {
    variant: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    action: PropTypes.func
};

export default Button;