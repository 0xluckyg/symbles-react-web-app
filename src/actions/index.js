import * as keys from '../utilities/constants';
import * as mock from '../utilities/mock-files';

export const getFilings = () => {
    return {
        type: keys.GET_FILINGS,
        payload: Promise.resolve(
            mock.filings
        )
    }
}

export const getBuyHistory = (id) => {
    return {
        type: keys.GET_BUY_HISTORY,
        payload: Promise.resolve(
            mock.filings[id]
        )
    }
}

export const getBuyerHistory = (name) => {
    return {
        type: keys.GET_BUYER_HISTORY,
        payload: Promise.resolve(
            [name, mock.buyers[name]]
        )
    }
}

export const resetBuyerHistory = () => {
    return {
        type: keys.RESET_BUYER_HISTORY,
        payload: []
    }
}

export const closeOtherCells = (bool) => {
    return {
        type: keys.CLOSE_OTHER_CELLS,
        payload: bool
    }
}

export const showLogInOrSignUpView = (type) => {
    return {
        type: keys.USER_AUTH_VIEW,
        payload: type
    }
}
