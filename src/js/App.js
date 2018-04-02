import React from 'react'
import Router from "./Router";
import {hot} from 'react-hot-loader'

const App = () => (
    <div className="page-wrapper">
        <Router/>
    </div>
);

export default hot(module)(App)
