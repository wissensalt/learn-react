import React from 'react';
import ReactDOM from 'react-dom';

function getPhoneNumberLabel() {
    return "Phone Number : "
}

function getAddressLabel() {
    return {
        text: 'Address : '
    }
}
const App = () => {
    const buttonText = 'Click Me';

    return (
        <div>
            <div>
                <label htmlFor="name" className="label">
                    Input Name :
                </label>
                <input id="name" type="text"/>
            </div>

            <div>
                <label htmlFor="phone-number">
                    {getPhoneNumberLabel()}
                </label>
                <input id="phone-number" type="text"/>
            </div>

            <div>
                <label htmlFor="address">
                    {getAddressLabel().text}
                </label>
                <input id="address" type="text"/>
            </div>

            <div>
                <button style={{backgroundColor:'blue', color: 'white'}}>{buttonText}</button>
            </div>
        </div>
    );
};

ReactDOM.render(<App/>, document.querySelector("#root"));