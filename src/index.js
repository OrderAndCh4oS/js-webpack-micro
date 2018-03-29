import React from 'react'
import ReactDOM from "react-dom";
import App from './js/app.js'

console.log('App');

const render = () => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
};

render();