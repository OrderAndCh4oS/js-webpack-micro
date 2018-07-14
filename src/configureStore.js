import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import index from './app/reducers/index';

const configureStore = () => {
    const middleware = [thunk];
    // eslint-disable-next-line no-undef
    if (process.env.NODE_ENV !== 'production') {
        middleware.push(createLogger());
    }

    return createStore(index, applyMiddleware(...middleware));
};

export default configureStore;