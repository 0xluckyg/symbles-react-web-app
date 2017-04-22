import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {getFilings} from '../../actions/index';
import {bindActionCreators} from 'redux';
import FilingSummaryCell from './filing-summary-cell';
import styles from '../../styles/filing-summary-list.css';
import {Link} from 'react-router';

class FilingSummaryList extends Component {

    constructor(props){
        super(props)

        this.subscribeHeader = this.subscribeHeader.bind(this);
        this.renderFilings = this.renderFilings.bind(this);
    }

    subscribeHeader(){
        if (!this.props.userInfo.userIsSubscribed) {
            return(
                <div className={styles.subscribeDiv}>
                    <Link to="/subscribe" className={styles.subscribeText}>SUBSCRIBE NOW FOR REAL TIME DATA WITH TEXT NOTIFICATIONS</Link>
                </div>
            )
        }
        return null
    }

    renderFilings(){        
        this.props.filingSummary.map(filing => {            
            return (
                <FilingSummaryCell key={filing.ticker} filing={filing}/>
            )
        })        
    }

    componentWillMount(){
        this.props.getFilings();        
    }

    render() {
        //Date, Ticker, Transactions, Amount, Price, Transaction Code, Ownership Type
        return (
            <div className={styles.mainDiv}>
                {console.log(this.props.filingSummary)}
                {this.subscribeHeader()}
                <table className={styles.filingSummaryTable}>                    
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>TICKER</th>
                            <th>TRANSACTIONS</th>
                            <th>AMOUNT</th>
                            <th>PRICE</th>
                            <th>CODE</th>
                            <th>OWNERSHIP TYPE</th>
                        </tr>
                    </thead>
                    {this.props.filingSummary.map(filing => {            
                        return (
                            <FilingSummaryCell key={filing.ticker} filing={filing}/>
                        )
                    })}
                </table>
            </div>
        );
    }
}

FilingSummaryList.propTypes = {
    filingSummary: PropTypes.array.isRequired,
    getFilings: PropTypes.func.isRequired,
    userInfo: PropTypes.object
}

function mapStateToProps({filingSummary, userInfo}){
    return {filingSummary, userInfo};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {getFilings},
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(FilingSummaryList);
