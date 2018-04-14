import React from 'react';
import ReactDOM from 'react-dom';
const css = require('./app.css');
import Main from './containers/main.js';
import store from './store.js';
import { Provider } from 'react-redux';


ReactDOM.render(
    <div>
        <Provider store={store}>
            <Main />
        </Provider>
    </div>
    , document.getElementById('root'))

