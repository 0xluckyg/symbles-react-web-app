import React, {Component, PropTypes} from 'react';
import subtableStyles from '../../../styles/filing-subtable.css';
import {getBuyerHistory} from '../../../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as keys from '../../../utilities/constants';

const FilingSummaryCompanyBuyData = ({companyBuyData, handleEvent, name}) => {

    function positiveOrNegativeChange(id){
        if (companyBuyData[keys.PRICE_SINCE] >= 0) {
            return <div key={id} className={subtableStyles.customTd + ' ' + subtableStyles.positive}>+{companyBuyData[keys.PRICE_SINCE]}%</div>
        } else {
            return <div key={id} className={subtableStyles.customTd + ' ' + subtableStyles.negative}>{companyBuyData[keys.PRICE_SINCE]}%</div>
        }
    }

    return(
            <div onClick={() => handleEvent(name)} className={subtableStyles.customTr}>
                {Object.keys(companyBuyData).map(id => {
                    if (id === keys.PRICE_SINCE) {
                        return positiveOrNegativeChange(id);
                    } else {
                        return <div key={id} className={subtableStyles.customTd}>{companyBuyData[id]}</div>
                    }
                })}
            </div>
    )
}

class FilingSummaryCompanyBuy extends Component{
    constructor(props){
        super(props);

        this.state = {
            componentDataDidUpdate:false,
            componentBuyData:[]
        }

        this.callBuyerHistory = this.callBuyerHistory.bind(this);
    }

    //Only changes in the beginning when the prop loads (to prevent conflict with other subtables)
    componentWillReceiveProps(nextProps){
        if (!this.state.componentDataDidUpdate) {
            this.setState({
                componentDataDidUpdate: true,
                componentBuyData:nextProps.buyHistory
            });
        }
    }

    callBuyerHistory(name, e){
        this.props.getBuyerHistory(name);
        this.props.onChange(e);
    }

    render(){
        return(
            <div className={subtableStyles.customTableWrapper}>
                <div className={subtableStyles.customTable}>
                    <div className={subtableStyles.customThead}>
                        <div className={subtableStyles.customTr}>
                            <div className={subtableStyles.customTd}>DATE</div>
                            <div className={subtableStyles.customTd}>BUYER</div>
                            <div className={subtableStyles.customTd}>TITLE</div>
                            <div className={subtableStyles.customTd}>TYPE</div>
                            <div className={subtableStyles.customTd}>PRICE</div>
                            <div className={subtableStyles.customTd}>SHARES</div>
                            <div className={subtableStyles.customTd}>AMOUNT</div>
                            <div className={subtableStyles.customTd}>SINCE</div>
                        </div>
                    </div>
                    <div className={subtableStyles.customTbody}>
                        {(this.props.buyHistory.length) ? this.state.componentBuyData.map(companyBuyData => {
                            return <FilingSummaryCompanyBuyData
                                handleEvent={this.callBuyerHistory}
                                name={companyBuyData[keys.BUYER_NAME]}
                                key={companyBuyData[keys.FILING_DATE]}
                                companyBuyData={companyBuyData}/>
                        }) : null}
                    </div>
                </div>
            </div>
        );
    }
}

FilingSummaryCompanyBuy.propTypes = {
    onChange: PropTypes.func.isRequired,
    buyHistory: PropTypes.array.isRequired,
    getBuyerHistory: PropTypes.func.isRequired
}

function mapStateToProps({buyHistory}){
    return {buyHistory}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {getBuyerHistory},
        dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(FilingSummaryCompanyBuy);
