import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import { Parks } from './parks';
import { ParkStatus } from './park-status';
import { ParkInfo } from './park-info';
import { Comments } from './comments';
import { reducer as formReducer } from 'redux-form';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            parks: Parks,
            park_status: ParkStatus,
            park_info: ParkInfo,
            comments: Comments,
            form: formReducer
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}