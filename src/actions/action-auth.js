import * as keys from '../utilities/constants';
import axios from 'axios';
import {Cookies} from "react-cookie";

export const signUpUser = (userInfo) => {    
    return dispatch => {
        axios.post(`${keys.SERVER}/user/signup`, userInfo, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => dispatch(resolveGetUser(res.data)))
        .catch(err => {
             console.log(err);
        });
    }
}

export const getUserByToken = (token) => {
    return dispatch => {
        axios.get(`${keys.SERVER}/user/me`, {
            params: { token }
        }).then(res => dispatch(resolveGetUser(res.data)))
        .catch(err => {
             console.log(err);
        });
    }
}

export const signInUser = (userInfo) => {
    return dispatch => {
        axios.post(`${keys.SERVER}/user/login`, userInfo, {
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
        }).then(res => dispatch(resolveGetUser(res.data)))
        .catch(err => {
             console.log(err);
        });
    }
}

export const resolveGetUser = (body) => {    
    const d = new Date();
    d.setTime(d.getTime() + (60*60*24*30));
    const cookies = new Cookies();
    cookies.set('token', body.token, {path: "/", expires: d});

    console.log('BODY',body);

    return {
        type: keys.USER_SIGN_UP,
        payload: body.user
    }
}

export const showLogInOrSignUpView = (type) => {
    return {
        type: keys.USER_AUTH_VIEW,
        payload: type
    }
}