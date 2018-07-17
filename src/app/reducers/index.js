import {combineReducers} from 'redux';
import page from './pages';
import contactForm from './contact-form';

const app = combineReducers({page: page(), contactForm: contactForm()});

const rootReducer = combineReducers({
    app
});

export default rootReducer;
