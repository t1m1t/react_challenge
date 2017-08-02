import types from '../actions/types';

const DEFAULT_STATE = { authorized: false };

export default function(state = DEFAULT_STATE, action){
    switch(action.type){
        case types.TOGGLE_LOGIN:
            return {...state, authorized:action.payload}
        default:
            return state;
    }
}

