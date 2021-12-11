
import * as InfoActionTypes from './InfoActionTypes';

export const OrderParks = (state = {
        isLoading: true,
        errMess: null,
        parks: []
    }, action) => {
    switch (action.type) {
        case InfoActionTypes.ADD_ORDERPARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload}
        case InfoActionTypes.ORDERPARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}
        case InfoActionTypes.ORDERPARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, parks: []}
        default:
            return state;
    }
}