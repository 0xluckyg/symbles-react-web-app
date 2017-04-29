import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from '../../../styles/my-page.css';

class Tickers extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            ticker: ''
        };

        this.addButton = this.addButton.bind(this);
        this.tickerChange = this.tickerChange.bind(this);
    }

    addButton() {
        if (this.state.ticker !== '') {
            return <button className={styles.addTickerSubmit} type="submit">ADD</button>
        }
    }

    tickerChange(event) {        
        this.setState({ticker: event.target.value});        
    }

    render() {
        
        return(
            <div  className={styles.tickersView}>                
                <h3 className={styles.mainTitle}>My Tickers</h3>
                <hr/>
                <div className={styles.tickersContent}>
                    <form className={styles.addTickerForm}>
                        <input
                            onChange={this.tickerChange}
                            type="text"
                            placeholder="Type in a ticker ex: AMD">
                        </input>
                        {this.addButton()}
                    </form>
                    <ul>
                        <li></li>
                    </ul>                
                </div>
            </div>
        );
    }

}

export default Tickers;