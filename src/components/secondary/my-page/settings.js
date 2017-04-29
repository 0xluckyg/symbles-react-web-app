import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import styles from '../../../styles/my-page.css';

class Settings extends Component {
    
    constructor(props){
        super(props)

    }

    render() {
        return(
            <div  className={styles.settingsView}>                
                <h3 className={styles.mainTitle}>General Account Settings</h3>
                <hr/>                
                <div className={styles.settingsContent}>
                    <p>Text notification settings</p>
                    <p>Be notified for all tickers</p>
                    <p>Be notified for my tickers</p>
                    <p>Change phone number</p>
                    <form className={styles.phoneNumberForm}>
                        <input
                            onChange={this.tickerChange}
                            type="text"
                            placeholder="ex: 00012345678">
                        </input>                        
                    </form>           
                    <p>Change subscription</p>
                    <p>Change password</p>
                    <p>Delete account</p>
                    <p>Logout</p>                                    
                </div>
            </div>
        );
    }

}

export default Settings;