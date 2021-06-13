import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <div className="body">
        <App className="app"/>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);