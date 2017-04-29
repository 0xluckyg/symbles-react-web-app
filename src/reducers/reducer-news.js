import * as keys from '../utilities/constants';

export const ReducerNews = (state = [], action) => {    
    switch (action.type) {        
        case keys.GET_NEWS:            
            return state.concat(action.payload);
        default:
            return state;
    }
}
