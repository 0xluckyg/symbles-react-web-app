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

        this.subscribeHeader = this.subscribeHeader.bind(this)
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

    componentWillMount(){
        this.props.getFilings();
    }

    render() {
        return (
            <div className={styles.mainDiv}>
                {this.subscribeHeader()}
                <table className={styles.filingSummaryTable}>
                    <thead>
                        <tr>
                            <th>DATE</th>
                            <th>TICKER</th>
                            <th>RECENT BUYS</th>
                            <th>SHARES</th>
                            <th>AMOUNT</th>
                            <th>PRICE SINCE</th>
                            <th>PRICE NOW</th>
                        </tr>
                    </thead>
                        {Object.keys(this.props.filingSummary).map(id => {
                            return (
                                <FilingSummaryCell key={id} filingSummary={this.props.filingSummary[id]} ticker={id}/>
                            )
                        })}
                </table>
            </div>
        );
    }
}

FilingSummaryList.propTypes = {
    filingSummary: PropTypes.object.isRequired,
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
