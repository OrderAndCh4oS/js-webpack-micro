import React from 'react';
import ReactDOM from 'react-dom';

import Root from './app/components/root';
import configureStore from './configureStore';

import './sass/main.scss';

const store = configureStore();

ReactDOM.render(
    <Root store={store}/>,
    document.getElementById('root')
);
