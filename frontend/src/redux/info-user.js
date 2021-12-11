
import * as InfoActionTypes from './InfoActionTypes';

export const InfoUser = (state = {
        isLoading: true,
        errMess: null,
        info: {}
    }, action) => {
    switch (action.type) {
        case InfoActionTypes.ADD_INFOUSER:
            return {...state, isLoading: false, errMess: null, info: action.payload}
        case InfoActionTypes.INFOUSER_LOADING:
            return {...state, isLoading: true, errMess: null, info:{}}
        case InfoActionTypes.INFOUSER_FAILED:
            return {...state, isLoading: false, errMess: action.payload, info: {}}
        default:
            return state;
    }
}