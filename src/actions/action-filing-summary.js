import * as keys from '../utilities/constants';
import * as mock from '../utilities/mock-files';
import axios from 'axios';

export const getFilings = () => {
    return dispatch => {
        fetch(`${keys.SERVER}/form4`,{ mode: 'cors' })
            .then(res => res.json())
            .then(json => console.log(json));
            
    }        
}

export const resolveGetFilings = (data) => {
    return {

    }
}