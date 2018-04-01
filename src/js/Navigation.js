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

const Title = ({tag = "h1", classes = [], children}) => {
    {
        const HeadingTag = `${tag}`;
        return (<HeadingTag className={"title " + classes.join(" ")}>{children}</HeadingTag>);
    }
};
const Pretitle = ({classes = [], children}) => <p className={"pretitle " + classes.join(" ")}>{children}</p>;
const IntroText = ({classes = [], children}) => <p className={"intro-text " + classes.join(" ")}>{children}</p>;
const Text = ({classes = [], children}) => <p className={"text " + classes.join(" ")}>{children}</p>;

const Home = () =>
    <Column span={'col-12'}>
        <div>
            <Pretitle>Welcome to</Pretitle>
            <Title>Home</Title>
            <IntroText>Intro here</IntroText>
            <Text>Main text here</Text>
        </div>
        ;
    </Column>;
const One = () =>
    <Column span={'col-12'}>
        <div>
            <Pretitle>Welcome to</Pretitle>
            <Title>One</Title>
            <IntroText>Intro here</IntroText>
            <Text>Main text here</Text>
        </div>
    </Column>;
const Two = () =>
    <Column span={'col-12'}>
        <div>
            <Pretitle>Welcome to</Pretitle>
            <Title>Two</Title>
            <IntroText>Intro here</IntroText>
            <Text>Main text here</Text>
        </div>
    </Column>;
const Three = ({match}) =>
    <Column span={'col-12'}>
        <div>
            <Pretitle>Welcome to</Pretitle>
            <Title>{match.params.page}</Title>
            <IntroText>Intro here</IntroText>
            <Text>Main text here</Text>
        </div>
    </Column>;
const PageNotFound = () =>
    <Column span={'col-12'}>
        <div>
            <Pretitle>Sorry</Pretitle>
            <Title>Page not found</Title>
            <Text>Intro here</Text>
        </div>
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
                    <Route component={PageNotFound}/>
                </Switch>
            </Container>
        </div>
    </Router>
);

export default Navigation;