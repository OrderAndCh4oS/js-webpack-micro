import React from 'react'
import Navigation from "./Navigation";
import {hot} from 'react-hot-loader'


const App = () => {
    return <div className="page-wrapper">
        <Navigation/>
    </div>
};

export default hot(module)(App)

