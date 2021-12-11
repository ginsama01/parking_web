
import * as InfoActionTypes from './InfoActionTypes';

export const HistoryParks = (state = {
        isLoading: true,
        errMess: null,
        parks: []
    }, action) => {
    switch (action.type) {
        case InfoActionTypes.ADD_HISTORYPARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload}
        case InfoActionTypes.HISTORYPARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}
        case InfoActionTypes.HISTORYPARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, parks: []}
        default:
            return state;
    }
}