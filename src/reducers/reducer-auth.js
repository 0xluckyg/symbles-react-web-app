import * as keys from '../utilities/constants';

export const ReducerAuthView = (state, action) => {
    state = 0;
    switch (action.type) {
        case keys.USER_AUTH_VIEW:
            state = action.payload;
            return state;
        default:
            return state;
    }
}

function fileUser(user){

    let returnUser = {
        userEmail: user.email || '',
        firstName: user.firstName,
        lastName: user.lastName,
        subscription: user.subscribed,
        isLoggedIn: user.isLoggedIn
    }

    console.log("RET",returnUser);

    return returnUser;
}

export const ReducerUserInfo = (state, action) => {        
    if (state == null) {
        state = {
            userEmail: "",
            firstName: "",
            lastName: "",
            subscription: false,
            isLoggedIn: false
        }
    }

    switch (action.type) {
        case keys.SET_USER:
            state = fileUser(action.payload)
            return state;        
        default:            
            return state;
    }
}
