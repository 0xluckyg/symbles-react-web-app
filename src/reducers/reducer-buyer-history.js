import * as keys from '../utilities/constants';

function formatBuyer(buyerData){
    var listOfBuys = [];
    buyerData[1][keys.purchase_history].map(purchase => {
        var purchaseSummary = {};

        purchaseSummary[keys.BUYER] = buyerData[0] + ' (' + buyerData[1][keys.buyer_title] + ')';
        purchaseSummary[keys.FILING_DATE] = purchase[keys.filing_date];
        purchaseSummary[keys.TICKER] = purchase[keys.company_ticker];
        purchaseSummary[keys.BUY_TYPE] = purchase[keys.transaction];
        purchaseSummary[keys.SHARES] = purchase[keys.shares_transacted];
        purchaseSummary[keys.AMOUNT] = Math.round(purchase[keys.shares_transacted] * purchase[keys.share_price] * 100) / 100;

        listOfBuys.push(purchaseSummary);
        return null;
    })

    listOfBuys.sort(function(purchase1, purchase2) {
        var date1 = new Date(purchase1[keys.FILING_DATE]);
        var date2 = new Date(purchase2[keys.FILING_DATE]);

        return (date1 > date2) ? -1 : 1;
    });

    return listOfBuys;
}

export default function (state = [], action) {
    switch (action.type){
        case keys.GET_BUYER_HISTORY:
            state = formatBuyer(action.payload)
            return state;
        case keys.RESET_BUYER_HISTORY:
            state = action.payload
            return state
        default:
            return state;
    }
}
