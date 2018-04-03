import React from 'react'
import {NavLink, Route, RouteHandler, Switch} from 'react-router-dom'
import {Column, Container, Row} from "./structure";
import Page from "../pages/Page";
import PageNotFound from "../pages/PageNotFound";

const homeState = {
    pretitle: "Welcome to",
    title: "Home",
    introText: "This is the intro para...",
    text: "This is the next para..."
};
const oneState = {
    pretitle: "This is",
    title: "Page One",
    introText: "This is the intro para for page one...",
    text: "This is the next para for page one..."
};
const twoState = {
    pretitle: "This is",
    title: "Page Two",
    introText: "This is the intro para for page two...",
    text: "This is the next para for page two..."
};

const Home = () => <Page {...homeState}/>;
const One = () => <Page {...oneState}/>;
const Two = () => <Page {...twoState}/>;

const isActiveFunc = (match) => {
    return match;
};

const Links = () => (
    <nav className="main-nav">
        <NavLink exact isActive={isActiveFunc} activeClassName="active" to="/">Home</NavLink>
        {' '}
        <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/one">One</NavLink>
        {' '}
        <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/two">Two</NavLink>
    </nav>
);

const Router = () => (
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
                    <Route component={PageNotFound}/>
                </Switch>
            </Container>
        </div>
);

export default Router;