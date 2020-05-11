import React from 'react';
import ReactDOM from 'react-dom';

import Products from './pages/Products/Products';

import initStore from './stores/Stores'

import './styles/app.scss';

const store = initStore();

ReactDOM.render(
    <React.StrictMode>
        <Products productsStore={store.productsStore}/>
    </React.StrictMode>,
    document.getElementById('root')
);
