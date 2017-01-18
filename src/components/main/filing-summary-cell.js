import React, { Component, PropTypes } from 'react';
import styles from '../../styles/filing-summary-list.css';
import cellStyles from '../../styles/filing-summary-cell.css';
import {getBuyHistory,closeOtherCells,resetBuyerHistory} from '../../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import FilingSummarySubtable from './subtable/filing-subtable';
import * as keys from '../../utilities/constants';
import Transition from 'react-addons-css-transition-group';

const Subtable = ({isOpen, ticker}) => {
    const transitionNames = {
        enter: cellStyles.enter,
        enterActive: cellStyles.enterActive,
        leave: cellStyles.leave,
        leaveActive: cellStyles.leaveActive
    }

    const transitionProperties = {
        transitionEnterTimeout:500,
        transitionLeaveTimeout:500
    }

    return (
        <tr className={cellStyles.tableSubviewTr}>
            <td className={cellStyles.tableSubviewTd} colSpan={7}>
                <Transition {...transitionProperties} transitionName={transitionNames}>
                    {(isOpen) ? <FilingSummarySubtable ticker={ticker}/> : null}
                </Transition>
            </td>
        </tr>
    );
}

class FilingSummaryCell extends Component {

    constructor(props){
        super(props)
        this.state = {
            isOpen:false
        }

        this.positiveOrNegativeChange = this.positiveOrNegativeChange.bind(this);
        this.getTicker = this.getTicker.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if (nextProps.otherCellsClosed){
            if (this.state.isOpen) {
                this.setState({isOpen:false})
                this.props.resetBuyerHistory();
            }
        }
    }

    positiveOrNegativeChange(){
        if (this.props.filingSummary[keys.PRICE_CHANGE] >= 0) {
            return <td className={styles.positive}>+{this.props.filingSummary[keys.PRICE_CHANGE]}%</td>
        } else {
            return <td className={styles.negative}>{this.props.filingSummary[keys.PRICE_CHANGE]}%</td>
        }
    }

    getTicker(){
        if (this.state.isOpen === false) {
            this.props.closeOtherCells(true);
            this.props.getBuyHistory(this.props.ticker);
            this.setState({isOpen:true})
        } else {
            this.setState({isOpen:false})
            this.props.resetBuyerHistory();
        }
    }

    render() {
        return (
            <tbody>
                <tr onClick={() => this.getTicker()}>
                    <td>{this.props.filingSummary[keys.MOST_RECENT]}</td>
                    <td>{this.props.ticker}</td>
                    <td>{this.props.filingSummary[keys.RECENT_BUYS]}</td>
                    <td>{this.props.filingSummary[keys.SHARES]}</td>
                    <td>{this.props.filingSummary[keys.AMOUNT]}</td>
                    {this.positiveOrNegativeChange()}
                    <td>$1.6</td>
                </tr>
                <Subtable isOpen={this.state.isOpen} ticker={this.props.ticker}/>
            </tbody>
        );
    }
};

FilingSummaryCell.propTypes = {
    ticker: PropTypes.string.isRequired,
    filingSummary: PropTypes.object.isRequired,
    getBuyHistory: PropTypes.func.isRequired,
    closeOtherCells: PropTypes.func.isRequired
}


function mapStateToProps({otherCellsClosed}) {
    return {otherCellsClosed};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {getBuyHistory,closeOtherCells,resetBuyerHistory},
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(FilingSummaryCell);
