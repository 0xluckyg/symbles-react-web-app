import * as keys from '../utilities/constants';

export default function(state, action) {
    state = false;
    switch (action.type) {
        case keys.CLOSE_OTHER_CELLS:
            state = action.payload;
            return state;
        default:
            return state;
    }
}
