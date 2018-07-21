import {connectedRouterRedirect} from 'redux-auth-wrapper/history4/redirect';
import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';

const userIsAuthenticated = connectedRouterRedirect({
    redirectPath: '/login',
    authenticatedSelector: state => {
        console.log(state);
        return (state.app.auth.data.token !== null);
    },
    wrapperDisplayName: 'UserIsAuthenticated'
});

const locationHelper = locationHelperBuilder({});

const userIsNotAuthenticated = connectedRouterRedirect({
    redirectPath: (state, ownProps) => locationHelper.getRedirectQueryParam(ownProps) || '/',
    allowRedirectBack: false,
    authenticatedSelector: state => {
        console.log(state);
        return (state.app.auth.data.token === null);
    },
    wrapperDisplayName: 'UserIsNotAuthenticated'
});

export {userIsAuthenticated, userIsNotAuthenticated};