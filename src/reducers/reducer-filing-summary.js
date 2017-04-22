import * as keys from '../utilities/constants';
import accounting from 'accounting';
import moment from 'moment';

function formatFilings(listOfTransactions) {
    const filingSummaries = [];
    
    listOfTransactions.map(filings => {

        const filingSummary = {transactions: []};
        for (let i = 0; i < filings.length; i++) {            
            const filing = filings[i];

            filing.date = formatDate(filing.date);

            if (i === 0) {
                filingSummary.ticker = filing.ticker;
                filingSummary.company = filing.company;
                filingSummary.date = filing.date;     
                filingSummary.transactionAmount = accounting.formatMoney(filing.transactionAmount);
                filingSummary.transactionPrice = accounting.formatMoney(filing.transactionPrice);
                filingSummary.ownershipNature = filing.ownershipNature;
                filingSummary.transactionCode = filing.transactionCode;
                filingSummary.name = formatReporterName('', filing.reporter);
            }            

            if (i !== 0 && filing.date === filingSummary.date) {
                filingSummary.name = formatReporterName(filingSummary.name, filing.reporter);
                filing.transactionAmount = `${filing.transactionAmount} (Cluster)`;
            }


            filingSummary.transactions.push(filing);
        }

        filingSummaries.push(filingSummary);
    });

    return filingSummaries;
}

function formatDate(date) {
    date = new Date(date);
    date = moment(date).format('MMMM DD, YYYY');
    return date;    
}

function formatReporterName(clusterName, rawName) {
    rawName = rawName.toLowerCase();
    const rawNameArr = rawName.split(' ');
    
    const firstNameRaw = rawNameArr[0];
    const lastNameRaw = rawNameArr[rawNameArr.length - 1];

    const firstName = firstNameRaw[0].toUpperCase() + firstNameRaw.slice(1);
    const lastNameInitial = lastNameRaw[0].toUpperCase();    

    if (clusterName !== '') {
        return `${clusterName}, ${firstName} ${lastNameInitial}`
    } else {
        return `${firstName} ${lastNameInitial}`
    }    
}

export default function(state = [], action) {
    switch (action.type) {
        case keys.GET_FILINGS:            
            state = formatFilings(action.payload);
            return state;
        default:
            return state;
    }
}
