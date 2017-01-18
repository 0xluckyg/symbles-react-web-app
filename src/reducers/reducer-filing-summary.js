import * as keys from '../utilities/constants';

//Helper function
const calculateSummary = (posts) => {
    var listOfCompanySummaries = {}

    //Loop through each company in the array
    Object.keys(posts).map(id => {
        var nameArray = []
        var mostRecentDate = ''
        var numberOfShares = 0, moneySpent = 0

        var purchaseHistoryArray = posts[id][keys.insider_purchases]
        listOfCompanySummaries[id] = {}

        //Loop through each person in the company
        purchaseHistoryArray.map(history => {
            if (nameArray.length <= 3) nameArray.push(history[keys.buyer_name])
            mostRecentDate = compareDates(mostRecentDate, history[keys.purchase_history][0][keys.filing_date])

            //Loop through each transaction per person
            history[keys.purchase_history].map(purchaseDetail => {
                var transactionAmount = purchaseDetail[keys.shares_transacted] * purchaseDetail[keys.share_price]
                if (purchaseDetail[keys.transaction] === 'P') moneySpent += transactionAmount
                numberOfShares += purchaseDetail[keys.shares_transacted]
                return null;
            })
            return null;
        })

        if (nameArray.length > 0) listOfCompanySummaries[id][keys.RECENT_BUYS] = createNameString(nameArray)
        listOfCompanySummaries[id][keys.MOST_RECENT] = mostRecentDate
        listOfCompanySummaries[id][keys.SHARES] = numberOfShares
        listOfCompanySummaries[id][keys.AMOUNT] = moneySpent

        listOfCompanySummaries[id][keys.PRICE_CHANGE] = Math.floor(Math.random() * 200) - 100
        return null;
    })

    //Function to compare dates
    function compareDates(date1String, date2String){
        if (date1String === '') return date2String

        var date1 = new Date(date1String)
        var date2 = new Date(date2String)

        // date1 > date2 if date1 is more recent
        return (date1 > date2) ? date1String : date2String
    }

    //Function for creating a name list
    function createNameString(arrayOfNames) {
        var returnName = ''
        arrayOfNames.map(name => {
            var tempName = name.split(' ')
            returnName += tempName[0] + ' ' + tempName[tempName.length-1].charAt(0) + ', '
            return null;
        })
        return returnName.substring(0, returnName.length - 2)
    }

    return listOfCompanySummaries
}

export default function(state = {}, action) {
    switch (action.type) {
        case keys.GET_FILINGS:
            state = calculateSummary(action.payload)
            return state;
        default:
            return state;
    }
}
