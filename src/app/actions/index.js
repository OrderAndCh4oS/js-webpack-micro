import * as api from '../api';
import * as types from './types';
import * as fromPage from '../reducers/pages';
import * as fromContactForm from '../reducers/contact-form';

const fetchPage = (page) => (dispatch, getState) => {
    if (fromPage.isFetching(getState().app.page, page)) {
        return Promise.resolve();
    }
    dispatch({
        type: types.PAGE_REQUEST,
        page
    });
    return api.fetchPage(page).then(
        response => {
            if (!response.error) {
                dispatch({
                    type: types.PAGE_SUCCESS,
                    page,
                    response
                });
            } else {
                dispatch({
                    type: types.PAGE_INVALID,
                    page,
                    message: response.error
                });
            }
        },
        error => {
            dispatch({
                type: types.PAGE_FAILURE,
                page,
                message: error.message || 'Something went wrong'
            });
        });
};

const postContactForm = (values) => (dispatch, getState) => {
    if (fromContactForm.isFetching(getState().app.contactForm)) {
        return Promise.resolve();
    }
    dispatch({
        type: types.CONTACT_REQUEST,
        values
    });
    return api.postContactForm(values).then(
        response => {
            if (!response.error) {
                dispatch({
                    type: types.CONTACT_SUCCESS,
                    response: response.data
                });
            } else {
                dispatch({
                    type: types.CONTACT_INVALID,
                    values,
                    message: response.error
                });
            }
        },
        error => {
            dispatch({
                type: types.CONTACT_FAILURE,
                values,
                message: error.message || 'Something went wrong'
            });
        });
};

export {fetchPage, postContactForm};