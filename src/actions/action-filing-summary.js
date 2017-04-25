import * as keys from '../utilities/constants';
import axios from 'axios';

export const getFilings = () => {
    return dispatch => {
        axios.get(`${keys.SERVER}/form4`)
            .then(res => dispatch(resolveGetFilings(res.data)))
            .catch(err => {
                console.log(err);
            });
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