import React from 'react';

const DoubleButton = ({primary, primary2, name1, name2}) => {
    return(
        <div>
            <button className={primary}>{name1}</button>
            <br />
            <button className={primary2}>{name2}</button>
        </div>
    );
}


export {DoubleButton};