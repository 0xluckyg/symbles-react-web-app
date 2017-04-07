import React, {Component, PropTypes} from 'react';
import subtableStyles from '../../../styles/filing-subtable.css';
import {connect} from 'react-redux';
import * as keys from '../../../utilities/constants';

const FilingSummaryBuyerData = ({buyerData}) => {

    return(
            <div className={subtableStyles.customTr}>
                {Object.keys(buyerData).map(id => {
                    return <div key={id} className={subtableStyles.customTd}>{buyerData[id]}</div>
                })}
            </div>
    )
}

const BuyerTable = ({buyerHistory}) => {
    return (
        <div className={subtableStyles.customTableWrapper}>
            <div className={subtableStyles.customTable}>
                <div className={subtableStyles.customThead}>
                    <div className={subtableStyles.customTr}>
                        <div className={subtableStyles.customTd}>BUYER</div>
                        <div className={subtableStyles.customTd}>DATE</div>
                        <div className={subtableStyles.customTd}>TICKER</div>
                        <div className={subtableStyles.customTd}>TYPE</div>
                        <div className={subtableStyles.customTd}>SHARES</div>
                        <div className={subtableStyles.customTd}>AMOUNT</div>
                    </div>
                </div>
                <div className={subtableStyles.customTbody}>
                    {buyerHistory.map(buyerData => {
                        return <FilingSummaryBuyerData key={buyerData[keys.FILING_DATE]} buyerData={buyerData}/>
                    })}
                </div>
            </div>
        </div>
    )
}

const NoBuyerTable = ({text}) => {
    return (
        <div className={subtableStyles.noData}>
            <p>{text}</p>
        </div>
    )
}

class FilingSummaryBuyer extends Component{
    render(){
        let textWhenNoData = "PLEASE SELECT A BUYER FROM 'BUYER LIST'";

        return(
            <div className={subtableStyles.customTableWrapper}>
                {(this.props.buyerHistory.length) ? <BuyerTable buyerHistory={this.props.buyerHistory}/> : <NoBuyerTable text={textWhenNoData}/>}
            </div>
        );
    }
}

FilingSummaryBuyer.propTypes = {
    buyerHistory: PropTypes.array
}

function mapStateToProps({buyerHistory}){
    return {buyerHistory}
}

export default connect(mapStateToProps)(FilingSummaryBuyer);
