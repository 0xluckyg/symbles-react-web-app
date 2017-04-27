import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from '../../../styles/my-page.css';

class Tickers extends Component {
    
    constructor(props){
        super(props)

        console.log('wtf');

    }

    render() {
        // console.log('wtf');
        return(
            <div  className={styles.tickersView}>
                <h3>My Tickers</h3>
                <hr/>
                <form>
                    <input></input>
                    <submit></submit>
                </form>
                <ul>
                    <li></li>
                </ul>                
            </div>
        );
    }

}

export default Tickers;