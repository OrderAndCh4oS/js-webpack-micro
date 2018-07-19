import {combineReducers} from 'redux';
import page from './pages';
import contactForm from './contact-form';
import plotForm from './plot-form';

const app = combineReducers({
    page: page(),
    contactForm: contactForm(),
    plotForm: plotForm()
});

const rootReducer = combineReducers({
    app
});

export default rootReducer;
