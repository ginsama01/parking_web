import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import { Parks } from './parks';
import { InitialSignup } from './signup';
import { createForms } from 'react-redux-form';
import { InitialLogin } from './login';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            parks: Parks,
            ...createForms({
                signup: InitialSignup,
                login: InitialLogin
            })
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}