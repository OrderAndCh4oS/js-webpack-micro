import React from 'react'
import {BrowserRouter as Router, Route, NavLink, Switch} from 'react-router-dom'

const Home = () => <h1>Home</h1>;
const One = () => <h1>One</h1>;
const Two = () => <h1>Two</h1>;
const Three = ({match}) => {
    return <h1>{match.params.page}</h1>;
};
const PageNotFound = () => <h1>Page not found</h1>;

const isActiveFunc = (match) => {
    return match;
};

const Links = () => (
    <nav>
    <NavLink exact isActive={isActiveFunc} activeClassName="active" className="button" to="/">Home</NavLink>
    <NavLink strict isActive={isActiveFunc} activeClassName="active" className="button" to="/one">One</NavLink>
    <NavLink strict isActive={isActiveFunc} activeClassName="active" className="button" to="/two">Two</NavLink>
    <NavLink strict isActive={isActiveFunc} activeClassName="active" className="button" to="/three/hello">??</NavLink>
</nav>
);

const App = () => {
    console.log('main');
    return <div className="page-wrapper">
        <Router>
            <div className="page-content">
                <Links/>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route strict path="/one" component={One}/>
                    <Route strict path="/two" component={Two}/>
                    <Route strict path="/three/:page" component={Three}/>
                    <Route strict component={PageNotFound}/>
                </Switch>
            </div>
        </Router>
    </div>
};

export default App

