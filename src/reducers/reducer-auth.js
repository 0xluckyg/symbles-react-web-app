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
