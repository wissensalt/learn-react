import React from "react";
import { Provider } from "react-redux";
import Store from "./reducers";
import Todos from "./components/Todos";
import Form from "./components/Form";

const App = () => {
    return (
        <Provider store={Store}>
            <Todos/>
            <Form/>
        </Provider>
    );
};

export default App;
