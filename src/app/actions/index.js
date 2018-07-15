import * as api from '../api';
import * as types from './types';
import * as fromPage from '../reducers';

const fetchPage = (page) => (dispatch, getState) => {
    if (fromPage.isFetching(getState().app, page)) {
        return Promise.resolve();
    }
    dispatch({
        type: types.PAGE_REQUEST,
        page
    });
    return api.fetchPage(page).then(
        data => dispatch({
            type: types.PAGE_SUCCESS,
            page,
            response: data
        }),
        error => {
            dispatch({
                type: types.PAGE_FAILURE,
                page,
                message: error.message || 'Something went wrong'
            });
        }
    );
};

export {fetchPage};