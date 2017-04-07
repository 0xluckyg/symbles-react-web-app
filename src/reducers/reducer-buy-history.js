import * as keys from '../utilities/constants';

function formatBuys(purchases){
    let listOfPurchases = [];

    purchases[keys.insider_purchases].map(buyer => {
        buyer[keys.purchase_history].map(purchase => {
            let purchaseSummary = {};

            purchaseSummary[keys.FILING_DATE] = purchase[keys.filing_date];
            purchaseSummary[keys.BUYER_NAME] = buyer[keys.buyer_name];
            purchaseSummary[keys.BUYER_TITLE] = buyer[keys.buyer_title];
            purchaseSummary[keys.BUY_TYPE] = purchase[keys.transaction];
            purchaseSummary[keys.SHARE_PRICE] = purchase[keys.share_price];
            purchaseSummary[keys.SHARES_BOUGHT] = purchase[keys.shares_transacted];
            purchaseSummary[keys.AMOUNT_BOUGHT] = Math.round(purchase[keys.shares_transacted] * purchase[keys.share_price] * 100) / 100;
            purchaseSummary[keys.PRICE_SINCE] = Math.floor(Math.random() * 200) - 100

            listOfPurchases.push(purchaseSummary);
            return null;
        })
        return null;
    })

    listOfPurchases.sort(function(purchase1, purchase2) {
        let date1 = new Date(purchase1[keys.FILING_DATE]);
        let date2 = new Date(purchase2[keys.FILING_DATE]);

        return (date1 > date2) ? -1 : 1;
    });

    return listOfPurchases;
}

export default function(state = [], action) {
    switch (action.type) {
        case keys.GET_BUY_HISTORY:
            state=formatBuys(action.payload);
            return state;
        default:
            return state;
    }
}
