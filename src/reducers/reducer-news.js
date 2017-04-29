import * as keys from '../utilities/constants';

export const ReducerNews = (state = [], action) => {
    switch (action.type) {
        case keys.GET_NEWS:            
            state = action.payload;
            return state;
        default:
            return state;
    }
}
