import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from '../../../styles/my-page.css';

import Tickers from './tickers';
import Settings from './settings';

class MyPage extends Component {
    
    constructor(props){
        super(props)
        console.log('wtf');
    }

    render() {
        return(
            <div  className={styles.myPage} style={myPageStyle}>
                <Tickers/>
                <Settings/>
            </div>
        );
    }

}

export default MyPage;