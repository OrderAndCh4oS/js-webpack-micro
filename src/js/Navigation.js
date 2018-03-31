import React from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'

const column = ({title, content, span}) =>
    <div className="row">
        <div className={"column " + span}>
            <div>
                <h1>{title}</h1>
                <p>{content}</p>
            </div>
        </div>
    </div>
;

const Home = () => column({title: 'Home', content: 'Intro here', span: 'col-12'});
const One = () => column({title: 'One', content: 'Intro here', span: 'col-12'});
const Two = () => column({title: 'Two', content: 'Intro here', span: 'col-12'});
const Three = ({match}) => column({title: match.params.page, content: 'Intro here', span: 'col-12'});
const PageNotFound = () => <h1>Page not found</h1>;

const isActiveFunc = (match) => {
    return match;
};

const Links = () => (
    <nav className="main-nav">
        <NavLink exact isActive={isActiveFunc} activeClassName="active" className="button" to="/">Home</NavLink>
        <NavLink strict isActive={isActiveFunc} activeClassName="active" className="button" to="/one">One</NavLink>
        <NavLink strict isActive={isActiveFunc} activeClassName="active" className="button" to="/two">Two</NavLink>
        <NavLink strict isActive={isActiveFunc} activeClassName="active" className="button"
                 to="/three/hello">??</NavLink>
    </nav>
);

const Navigation = () => (
    <Router>
        <div className="page-content">
            <div className="container">
                <div className="row">
                    <div className="column col-12">
                        <Links/>
                    </div>
                </div>
            </div>
            <div className="container">
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route strict path="/one" component={One}/>
                    <Route strict path="/two" component={Two}/>
                    <Route strict path="/three/:page" component={Three}/>
                    <Route strict component={PageNotFound}/>
                </Switch>
            </div>
        </div>
    </Router>
);

export default Navigation;