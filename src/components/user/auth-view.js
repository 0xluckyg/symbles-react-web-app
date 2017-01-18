import React, {Component, PropTypes} from 'react';
import clickOutside from 'react-click-outside';

import styles from '../../styles/auth-view.css';
import LogIn from './log-in';
import SignUp from './sign-up';

import {showLogInOrSignUpView} from '../../actions/index';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

class AuthView extends Component {

    constructor(props){
        super(props);

        this.determineSelectedButton = this.determineSelectedButton.bind(this);
    }

    handleClickOutside() {
        this.props.showLogInOrSignUpView(0);
    }

    determineSelectedButton(selected){
        if (selected === 1) {
            return (
                <span>
                    <div onClick={() => this.props.showLogInOrSignUpView(1)} className={styles.switchButton}>
                        LOG IN
                    </div>
                    <div onClick={() => this.props.showLogInOrSignUpView(2)} className={styles.switchButton + ' ' + styles.switchNotSelected}>
                        SIGN UP
                    </div>
                </span>
            )
        } else {
            return (
                <span>
                    <div onClick={() => this.props.showLogInOrSignUpView(1)} className={styles.switchButton + ' ' + styles.switchNotSelected}>
                        LOG IN
                    </div>
                    <div onClick={() => this.props.showLogInOrSignUpView(2)} className={styles.switchButton}>
                        SIGN UP
                    </div>
                </span>
            )
        }
    }

    render(){
        return(
            <div className={styles.whiteBox}>
                <div className={styles.switchButtons}>
                    {(this.props.authView === 1) ? this.determineSelectedButton(1) : this.determineSelectedButton(2)}
                </div>
                {(this.props.authView === 1) ? <LogIn/> : <SignUp/>}
            </div>
        )
    }
}

AuthView.propTypes = {
    authView: PropTypes.number.isRequired
}

function mapStateToProps({authView}){
    return {authView}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {showLogInOrSignUpView},
        dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(clickOutside(AuthView));
