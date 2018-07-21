import {combineReducers} from 'redux';
import page, * as fromPages from './pages';
import contactForm, * as fromContactForm from './contact-form';
import plotForm, * as fromPlotForm from './plot-form';

const app = combineReducers({
    page: page(),
    contactForm: contactForm(),
    plotForm: plotForm()
});

const rootReducer = combineReducers({
    app
});

export default rootReducer;

export const getPage = (state) => fromPages.getPage(state.app.page);
export const isFetchingPage = (state, page) => fromPages.isFetching(state.app.page, page);
export const pageErrorMessage = (state) => fromPages.errorMessage(state.app.page);
export const pageInvalidRequest = (state) => fromPages.invalidRequest(state.app.page);

export const getPlotForm = (state) => fromPlotForm.getPlotForm(state.app.plotForm);
export const isFetchingPlotForm = (state) => fromPlotForm.isFetching(state.app.plotForm);
export const plotFormErrorMessage = (state) => fromPages.errorMessage(state.app.plotForm);
export const plotFormInvalidRequest = (state) => fromPages.invalidRequest(state.app.plotForm);

export const getContactForm = (state) => fromPlotForm.getPlotForm(state.app.contactForm);
export const isFetchingContactForm = (state) => fromContactForm.isFetching(state.app.contactForm);
export const didCompleteContactForm = (state) => fromContactForm.didComplete(state.app.contactForm);
export const contactFormErrorMessage = (state) => fromPages.errorMessage(state.app.contactForm);
export const contactFormInvalidRequest = (state) => fromPages.invalidRequest(state.app.contactForm);

