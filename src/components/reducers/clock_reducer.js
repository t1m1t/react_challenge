import types from '../actions/types';

const DEFAULT_STATE = { currentTime: null };

export default function (state = DEFAULT_STATE, action){
    switch (action.type){
        case types.TICK:
            return {...state, currentTime: new Date().toLocaleTimeString()};
        default:
            return state;
    }
}