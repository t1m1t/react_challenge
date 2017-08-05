import types from './types';
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com';

export function signin(userInfo){
    return dispatch => {
        axios.post(`${BASE_URL}/signin`, userInfo).then((resp) => {
            console.log("Sign In resp:", resp);

            localStorage.setItem('token', resp.data.token)

            dispatch({
                type: types.SIGNIN
            });

        }).catch(error => {

            dispatch(sendError("Invalid username or password"));
        });
    };
};

export function signup({email, password}){
    return (dispatch) => {
        axios.post(`${BASE_URL}/signup`, {email, password}).then((resp) => {
            console.log("Sign Up resp", resp);

            localStorage.setItem('token', resp.data.token);

            dispatch({
                type: types.SIGNUP
            });
        }).catch((error) => {

            dispatch(sendError(error.response.data.error));
        });
    };
};

export function fetchMsg(){
    return dispatch => {
        axios.get(BASE_URL, { headers: {authorization: localStorage.getItem('token')}}).then( resp => {
            dispatch({
                type: types.FETCH_MSG,
                payload: resp.data.message
            })
        })
    }
}

function sendError(msg){
    return{
        type: types.ERROR,
        error: msg
    }
}