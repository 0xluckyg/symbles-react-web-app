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

export const resolveGetUser = (user) => {    

    function saveToken() {
        const d = new Date();
        d.setTime(d.getTime() + (60*60*24*14));        
        const cookies = new Cookies();
        cookies.set('token', user.token, {path: "/", expires: d});
    }

    function saveLocal() {
        localStorage.setItem('firstName', user.firstName);
        localStorage.setItem('lastName', user.lastName);
        localStorage.setItem('subscription', user.subscribed);
    }

    saveToken();
    saveLocal();

    return {
        type: keys.GET_USER,
        payload: user.user
    }
}

export const getSavedUser = (user) => {
    return {
        type: keys.GET_USER,
        payload: user
    }
}

export const showLogInOrSignUpView = (type) => {
    return {
        type: keys.USER_AUTH_VIEW,
        payload: type
    }
}