import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import {getFilings} from '../../actions/index';
import {bindActionCreators} from 'redux';
import FilingSummaryCell from './filing-summary-cell';
import styles from '../../styles/filing-summary-list.css';

class FilingSummaryList extends Component {

    componentWillMount(){
        this.props.getFilings();
    }

    render() {
        return (
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
        );
    }
}

FilingSummaryList.propTypes = {
    filingSummary: PropTypes.object.isRequired,
    getFilings: PropTypes.func.isRequired
}

function mapStateToProps({filingSummary}){
    return {filingSummary};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {getFilings},
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(FilingSummaryList);
