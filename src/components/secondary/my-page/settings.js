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
                <h3>General Account Settings</h3>
                <hr/>                
                    <p>Text notification settings</p>
                    <p>Be notified for all tickers</p>
                    <p>Be notified for my tickers</p>
                    <p>Change phone number</p>
                    <form>
                        <input></input>
                        <input></input>
                    </form>           
                    <p>Change subscription</p>
                    <p>Change password</p>
                    <p>Delete account</p>
                    <p>Logout</p>                
                <ul>
                    <li></li>
                </ul>
            </div>
        );
    }

}

export default Settings;