import types from './types';

export function toggleLogin(auth){
    return {
        type: types.TOGGLE_LOGIN,
        payload: auth
    }
}