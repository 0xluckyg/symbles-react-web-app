import * as keys from '../utilities/constants';
import axios from 'axios';
import store from '../store';
import {getNews} from './index';

export const getFilings = () => {
    return dispatch => {
        axios.get(`${keys.SERVER}/form4`)
            .then(res => dispatch(resolveGetFilings(res.data)))
            .catch(err => {
                console.log(err);
            });
    }
}

function dispatchGetNews(filings) {
    filings.map(filingArray => {
        const ticker = filingArray[0].ticker;
        store.dispatch(getNews(ticker))
    })
}

export const resolveGetFilings = (body) => {
    dispatchGetNews(body);

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