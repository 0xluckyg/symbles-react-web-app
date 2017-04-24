import * as keys from '../utilities/constants';
import {Cookies} from "react-cookie";

export const signUpUser = (userInfo) => {    
    return dispatch => {
        fetch(`${keys.SERVER}/signup`, {
            method: 'POST',            
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(body =>  dispatch(resolveSignUp(body)));
    }
}

export const resolveSignUp = (body) => {    
    const d = new Date();
    d.setTime(d.getTime() + (60*60*24*30));
    const cookies = new Cookies();
    cookies.set('token', body.token, {path: "/", expires: d});

    return {
        type: keys.USER_SIGN_UP,
        payload: body.user
    }
}


export const signInUser = (userInfo) => {
    return {
        type: keys.USER_SIGN_IN,
        payload: userInfo
    }
}

export const showLogInOrSignUpView = (type) => {
    return {
        type: keys.USER_AUTH_VIEW,
        payload: type
    }
}