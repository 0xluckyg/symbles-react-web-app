import * as keys from '../utilities/constants';

export const signUpUser = (userInfo) => {
    console.log('USERINFO', JSON.stringify(userInfo));
    return dispatch => {
        fetch(`${keys.SERVER}/signup`, {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => {
            console.log('STATS',res.status);
            console.log(res.headers);
            console.log('RES',res);
            return res.json()
        })
        .then(body =>  dispatch(resolveSignUp(body)));
    }
}

export const resolveSignUp = (body) => {    
    console.log(body);
    return {
        type: keys.USER_SIGN_UP,
        payload: body
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