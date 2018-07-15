import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
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
    failure: types.PAGE_FAILURE
};
const requestStatus = requestStatuses(undefined, requestTypes);

const app = combineReducers({
    page,
    requestStatus
});

const rootReducer = combineReducers({
    app,
    form: formReducer
});

export default rootReducer;

export const getPage = (state) => state.page;
export const isFetching = (state) => state.requestStatus.isFetching;
export const errorMessage = (state) => state.requestStatus.errorMessage;