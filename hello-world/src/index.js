import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorldClassComponent from './components/HelloWorldClassComponent';
import HelloWorldFunctionComponent from "./components/HelloWorldFunctionComponent";

ReactDOM.render(
  <React.StrictMode>
    <HelloWorldClassComponent />
    <HelloWorldFunctionComponent/>
  </React.StrictMode>,
  document.getElementById('root')
);