import React from 'react'
import {BrowserRouter as Router, NavLink, Route, Switch} from 'react-router-dom'

const Container = ({classes = [], children}) =>
    <div className={"container " + classes.join(" ")}>{children}</div>;

const Row = ({children}) => <div className={"row"}>{children}</div>;

const Column = ({span, children}) =>
    <div className="row">
        <div className={"column " + span}>
            <div>
                {children}
            </div>
        </div>
    </div>
;

const Home = () =>
    <Column span={'col-12'}>
        <div><h1>Home</h1><p>Intro here</p></div>
    </Column>;
const One = () =>
    <Column span={'col-12'}>
        <div><h1>One</h1><p>Intro here</p></div>
    </Column>;
const Two = () =>
    <Column span={'col-12'}>
        <div><h1>Two</h1><p>Intro here</p></div>
    </Column>;
const Three = ({match}) =>
    <Column span={'col-12'}>
        <div><h1>{match.params.page}</h1><p>Intro here</p></div>
    </Column>;
const PageNotFound = () =>
    <Column span={'col-12'}>
        <div><h1>Page not found</h1><p>Intro here</p></div>
    </Column>;

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
            <Container>
                <Row>
                    <Column span="col-12">
                        <Links/>
                    </Column>
                </Row>
            </Container>
            <Container>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route strict path="/one" component={One}/>
                    <Route strict path="/two" component={Two}/>
                    <Route strict path="/three/:page" component={Three}/>
                    <Route strict component={PageNotFound}/>
                </Switch>
            </Container>
        </div>
    </Router>
);

export default Navigation;