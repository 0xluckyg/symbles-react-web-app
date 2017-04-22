import * as keys from '../utilities/constants';

export default function(state = [], action) {
    switch (action.type) {
        case keys.GET_FILINGS:            
            state = action.payload;
            return state;
        default:
            return state;
    }
}
