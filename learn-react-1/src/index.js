import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './bootstrap-4.0.0-beta/css/bootstrap.min.css';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware, compose} from 'redux';
import Reducer from './Reducer';
import {Provider} from 'react-redux';

const Simpan = createStore(
    Reducer,
    compose(
        applyMiddleware(thunk)
    )
);

ReactDOM.render(<Provider store={Simpan}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
