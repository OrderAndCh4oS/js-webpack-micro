import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import createPage from './page';

const app = combineReducers({
    home: createPage('home'),
    one: createPage('one'),
    two: createPage('two')
});

const rootReducer = combineReducers({
    app,
    form: formReducer
});

export default rootReducer;

