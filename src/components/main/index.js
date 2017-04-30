import React, { Component } from 'react';
import {connect} from 'react-redux';
import styles from '../../styles/main.css';
import {Link} from 'react-router';

import FilingList from './filing-summary-list';
import News from './news';

class Main extends Component {

    constructor(props){
        super(props)

        this.subscribeHeader = this.subscribeHeader.bind(this);
    }

    subscribeHeader(){
        console.log(this.props.userInfo.subscription);
        if (!this.props.userInfo.subscription) {
            return(
                <div className={styles.subscribeDiv}>
                    <Link to="/subscribe" className={styles.subscribeText}>SUBSCRIBE NOW FOR REAL TIME DATA WITH TEXT NOTIFICATIONS</Link>
                </div>
            )
        }
        return null
    }

    render() {                
        return (
            <div className={styles.mainDiv}>
                {this.subscribeHeader()}
                <div className={styles.contentDiv}>                
                    <div className={styles.filingList}>
                        <FilingList/>
                    </div>
                    <div className={styles.newsList}>
                        <News/>
                    </div>
                </div>                
            </div>
        );
    }
}

function mapStateToProps({userInfo}){
    return {userInfo};
}

export default connect(mapStateToProps)(Main);
