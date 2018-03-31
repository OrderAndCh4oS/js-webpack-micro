import React from 'react'
import ReactDOM from "react-dom";
import App from './js/App.js'
import './sass/main.scss'


const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
};

render();
