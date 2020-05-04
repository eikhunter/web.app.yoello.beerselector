import React from 'react';
import ReactDOM from 'react-dom';

import initStore from './stores/Stores'

import Register from './pages/Register/Register';

import './styles/app.scss';

const store = initStore();

ReactDOM.render(
    <React.StrictMode>
        <Register registerStore={store.registerStore}/>
    </React.StrictMode>,
    document.getElementById('root')
);
