import * as types from './types';
import * as fromReducers from '../reducers';
import * as apiCalls from '../api';
import fetchData from './fetch';

const fetchPage = fetchData(apiCalls.fetchPage, fromReducers.isFetchingPage, types.PAGE_FETCH);

const postCredentials = fetchData(apiCalls.postCredentials, fromReducers.isFetchingAuth, types.CREDENTIALS_FETCH);

const postContactForm = fetchData(apiCalls.postContactForm, fromReducers.isFetchingContactForm, types.CONTACT_FETCH);

const resetContactForm = () => (dispatch) => setTimeout(() => {
    dispatch({
        type: types.CONTACT_FETCH.RESET
    });
}, 5000);

const postPlotForm = fetchData(apiCalls.postPlotForm, fromReducers.isFetchingPlotForm, types.PLOT_FETCH);

export {fetchPage, postCredentials, postContactForm, resetContactForm, postPlotForm};