import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import { Parks } from './parks';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            parks: Parks
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}