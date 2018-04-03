import React from 'react'
import Router from "./components/Router";
import {hot} from 'react-hot-loader'

const App = () => (
    <div className="page-wrapper">
        <Router/>
    </div>
);

export default hot(module)(App)
