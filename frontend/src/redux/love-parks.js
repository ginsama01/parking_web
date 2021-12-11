
import * as InfoActionTypes from './InfoActionTypes';

export const LoveParks = (state = {
        isLoading: true,
        errMess: null,
        parks: []
    }, action) => {
    switch (action.type) {
        case InfoActionTypes.ADD_LOVEPARKS:
            return {...state, isLoading: false, errMess: null, parks: action.payload}
        case InfoActionTypes.LOVEPARKS_LOADING:
            return {...state, isLoading: true, errMess: null, parks: []}
        case InfoActionTypes.LOVEPARKS_FAILED:
            return {...state, isLoading: false, errMess: action.payload, parks: []}
        default:
            return state;
    }
}