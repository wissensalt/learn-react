import React from "react";
import MainRouter from "./router/MainRouter";

/**
 * Navigation :
 * home : /
 * about: /about
 * contact: /contact
 */

class App extends React.Component{
    render() {
        return (
            <div>
                <MainRouter/>
            </div>
        );
    }
}

export default App;
