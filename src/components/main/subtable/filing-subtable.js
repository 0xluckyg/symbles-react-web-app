import React, {Component, PropTypes} from 'react';
import styles from '../../../styles/filing-subtable.css';
import {getBuyHistory} from '../../../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import FilingSummaryCompanyBuy from './filing-subtable-buys';
import FilingSummaryBuyer from './filing-subtable-buyer';

class FilingSummarySubtable extends Component {

    constructor(props){
        super(props);

        this.state = {changeToBuyer:false};
        this.determineSelectedButton = this.determineSelectedButton.bind(this);
        this.changeToBuyerOnButtonClick = this.changeToBuyerOnButtonClick.bind(this);
        this.listenToChildForClickEvent = this.listenToChildForClickEvent.bind(this);
    }

    listenToChildForClickEvent(){
        this.setState({changeToBuyer:true});
    }

    determineSelectedButton(text, selected){
        if (selected) {
            return <p className={styles.selected}>{text}</p>
        } else {
            return <p>{text}</p>
        }
    }

    changeToBuyerOnButtonClick(bool){
        if (!bool) {
            this.props.getBuyHistory(this.props.ticker);
        }
        this.setState({changeToBuyer:bool});
    }

    render(){
        return(
            <div className={styles.tableSubviewDiv}>
                <div className={styles.buttonsDiv}>
                    <div onClick={() => this.changeToBuyerOnButtonClick(false)} className={styles.buttonDiv}>
                        {this.determineSelectedButton('BUYER LIST', !this.state.changeToBuyer)}
                    </div>
                    <div onClick={() => this.changeToBuyerOnButtonClick(true)} className={styles.buttonDiv}>
                        {this.determineSelectedButton("BUYER'S BUY LIST", this.state.changeToBuyer)}
                    </div>
                </div>
                {(this.state.changeToBuyer) ? <FilingSummaryBuyer/> : <FilingSummaryCompanyBuy onChange={this.listenToChildForClickEvent}/>}
            </div>
        );
    }
}

FilingSummarySubtable.propTypes = {
    ticker: PropTypes.string.isRequired,
    buyerHistory: PropTypes.array.isRequired,
    getBuyHistory: PropTypes.func.isRequired
}

function mapStateToProps({buyerHistory}){
    return {buyerHistory}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {getBuyHistory},
        dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(FilingSummarySubtable);
