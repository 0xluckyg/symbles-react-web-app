import * as keys from '../utilities/constants';
import * as mock from '../utilities/mock-files';

export * from './action-filing-summary';
export * from './action-auth';

export const getBuyHistory = (id) => {
    return {
        type: keys.GET_BUY_HISTORY,
        payload: Promise.resolve(
            mock.filings
        )
    }
}

export const getBuyerHistory = (name) => {
    return {
        type: keys.GET_BUYER_HISTORY,
        payload: Promise.resolve(
            mock.filings
        )
    }
}

export const resetBuyerHistory = () => {
    return {
        type: keys.RESET_BUYER_HISTORY,
        payload: []
    }
}