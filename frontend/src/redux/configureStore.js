import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from "redux-logger";
import { BestParks } from './best-parks';
import { CheapParks } from './cheap-parks';
import { NearParks } from './near-parks'
import { ParkStatus } from './park-status';
import { ParkInfo } from './park-info';
import { Comments } from './comments';
import { reducer as formReducer } from 'redux-form';
import { InitialSignup } from './signup';
import { createForms } from 'react-redux-form';
import { InitialLogin } from './login';
import { LoveParks } from './love-parks';
import { OrderParks } from './order-parks';
import { HistoryParks } from './history-parks';
import {InfoUser} from './info-user';
import { InitialChangInfo } from './change-info';
import { InitialDeleteUser} from './delete-user';
import { InitialDeleteLovepark } from './delete-lovepark';
import { InitialDeleteHistorypark } from './delete-historypark';
import { InitialDeleteOrderpark } from './delete-orderpark';
export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            best_parks: BestParks,
            cheap_parks: CheapParks,
            near_parks: NearParks,
            park_status: ParkStatus,
            park_info: ParkInfo,
            comments: Comments,
            love_parks: LoveParks,
            order_parks: OrderParks,
            history_parks: HistoryParks,
            info_user: InfoUser,
            form: formReducer,
            ...createForms({
                signup: InitialSignup,
                login: InitialLogin,
                changeinfo: InitialChangInfo,
                deleteUser: InitialDeleteUser,
                deleteLovepark: InitialDeleteLovepark,
                deleteHistorypark: InitialDeleteHistorypark,
                deleteOrderpark: InitialDeleteOrderpark
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}