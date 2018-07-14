import * as types from '../actions/types';
import requestStatuses from './request-statuses';
import {combineReducers} from 'redux';

const createPage = (pageName) => {
    const page = (state = {}, action) => {
        switch (action.type) {
            case types.PAGE_SUCCESS:
                return pageName === action.page ? action.response : state;
            default:
                return state;
        }
    };

    const requestTypes = {
        request: types.PAGE_REQUEST,
        success: types.PAGE_SUCCESS,
        failure: types.PAGE_FAILURE
    };
    const requestStatus = requestStatuses(undefined, requestTypes);

    return combineReducers({page, requestStatus});
};

export default createPage;

export const getPage = (state) => state.page;
export const isFetching = (state) => state.requestStatus.isFetching;
export const errorMessage = (state) => state.requestStatus.errorMessage;
