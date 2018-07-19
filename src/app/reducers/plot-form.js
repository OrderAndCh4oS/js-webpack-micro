import {combineReducers} from 'redux';
import requestStatuses from './request-statuses';
import * as types from '../actions/types';

const plotForm = () => {
    const data = (state = {}, action) => {
        switch (action.type) {
            case types.CONTACT_SUCCESS:
                return action.response;
            case types.CONTACT_RESET:
                return {};
            default:
                return state;
        }
    };

    const requestTypes = {
        request: types.CONTACT_REQUEST,
        success: types.CONTACT_SUCCESS,
        invalid: types.CONTACT_INVALID,
        failure: types.CONTACT_FAILURE
    };
    const requestStatus = requestStatuses(undefined, requestTypes);

    return combineReducers({
        data,
        requestStatus
    });
};

export default plotForm;

export const getPlotForm = (state) => state.data;
export const isFetching = (state) => state.requestStatus.isFetching;
export const invalidRequest = (state) => state.requestStatus.invalidRequest;
export const errorMessage = (state) => state.requestStatus.errorMessage;