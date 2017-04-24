import * as keys from '../utilities/constants';

export const getFilings = () => {
    return dispatch => {
        fetch(`${keys.SERVER}/form4`, {
                method: 'GET'
            })
            .then(res => res.json())
            .then(body => dispatch(resolveGetFilings(body)));
    }        
}

export const resolveGetFilings = (body) => {
    return {
        type: keys.GET_FILINGS,
        payload: body
    }
}

export const closeOtherCells = (bool) => {
    return {
        type: keys.CLOSE_OTHER_CELLS,
        payload: bool
    }
}