import {combineReducers} from 'redux';
import requestStatuses from './request-statuses';
import * as types from '../actions/types';

const contactForm = () => {
    const data = (state = {}, action) => {
        switch (action.type) {
            case types.CONTACT_FETCH.SUCCESS:
                return action.response;
            case types.CONTACT_RESET:
                return {};
            default:
                return state;
        }
    };

    const requestStatus = requestStatuses(undefined, types.CONTACT_FETCH);

    return combineReducers({
        data,
        requestStatus
    });
};

export default contactForm;

export const getContactForm = (state) => state.data;
export const isFetching = (state) => state.requestStatus.isFetching;
export const didComplete = (state) => state.requestStatus.didComplete;
export const invalidRequest = (state) => state.requestStatus.invalidRequest;
export const errorMessage = (state) => state.requestStatus.errorMessage;