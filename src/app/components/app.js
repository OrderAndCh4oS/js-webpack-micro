import React from 'react';
import {NavLink, Route, Switch} from 'react-router-dom';
import {Column, Container, Row} from './structure';
import CurrentPage from './page';
import ContactPage from './contact-page';

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
        {' '}
        <NavLink strict isActive={isActiveFunc} activeClassName="active" to="/contact-us">Contact Us</NavLink>
    </nav>
);

const App = () => (
    <div className="page-wrapper">
        <div className="page-content">
            <Container>
                <Row>
                    <Column>
                        <Links/>
                    </Column>
                </Row>
            </Container>
            <Container>
                <Switch>
                    <Route exact path="/contact-us" component={ContactPage}/>
                    <Route exact path="/:page?" component={CurrentPage}/>
                </Switch>
            </Container>
        </div>
    </div>
);

export default App;
