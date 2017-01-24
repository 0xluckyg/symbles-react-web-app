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

function fetchUser(userInfo){

    var returnUser = {
        userEmail: userInfo.userEmail,
        userFirstName: "User",
        userLastName: "Name",
        userIsSubscribed: false,
        userIsLoggedIn: true
    }

    //Fetch user from database
    return returnUser;
}

function registerUser(userInfo){

    var returnUser = {
        userEmail: userInfo.userEmail,
        userFirstName: userInfo.userFirstName,
        userLastName: userInfo.userLastName,
        userIsSubscribed: false,
        userIsLoggedIn: true
    }

    return returnUser;
}

export const ReducerUserInfo = (state, action) => {

    if (state == null) {
        state = {
            userEmail: "",
            userFirstName: "",
            userLastName: "",
            userIsSubscribed: false,
            userIsLoggedIn: false
        }
    }

    switch (action.type) {
        case keys.USER_SIGN_UP:
            state = registerUser(action.payload)
            return state;
        case keys.USER_SIGN_IN:
            state = fetchUser(action.payload)
            return state;
        default:
            return state;
    }
}
