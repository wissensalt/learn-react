import React from "react";
import {Provider} from "react-redux";
import store from "./store";
import {Header} from "./components/Header";
import {Main} from "./components/Main";
import {Footer} from "./components/Footer";

const App = () => {
    return (
        <Provider store={store}>
            <div style={{height: "1000px"}}>
                <Header/>
                <Main/>
                <Footer/>
            </div>
        </Provider>
    );
};

export default App;
