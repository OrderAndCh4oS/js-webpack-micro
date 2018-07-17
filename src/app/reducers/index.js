import {combineReducers} from 'redux';
import requestStatuses from './request-statuses';
import * as types from '../actions/types';

const page = (state = {}, action) => {
    switch (action.type) {
        case types.PAGE_SUCCESS:
            return action.response;
        default:
            return state;
    }
};

const requestTypes = {
    request: types.PAGE_REQUEST,
    success: types.PAGE_SUCCESS,
    invalid: types.PAGE_INVALID,
    failure: types.PAGE_FAILURE
};
const requestStatus = requestStatuses(undefined, requestTypes);

const app = combineReducers({
    page,
    requestStatus
});

const rootReducer = combineReducers({
    app,
});

export default rootReducer;

export const getPage = (state) => state.page;
export const isFetching = (state) => state.requestStatus.isFetching;
export const invalidRequest = (state) => state.requestStatus.invalidRequest;
export const errorMessage = (state) => state.requestStatus.errorMessage;