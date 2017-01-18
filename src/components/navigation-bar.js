import React, {Component} from 'react';

import styles from '../styles/navigation-bar.css';
import AuthView from './user/shade';

import {showLogInOrSignUpView} from '../actions/index';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import Transition from 'react-addons-css-transition-group';

const BurgerNav = ({showLogInOrSignUpView}) => {
    return (
        <ul className={styles.burgerBar}>
            <li onClick={() => showLogInOrSignUpView(0)}> <Link className={styles.navLink} to="/about">ABOUT</Link> </li>
            <li onClick={() => showLogInOrSignUpView(0)}> <Link className={styles.navLink} to="/subscribe">SUBSCRIBE</Link> </li>
            <li onClick={() => showLogInOrSignUpView(2)}> SIGN UP </li>
            <li onClick={() => showLogInOrSignUpView(1)}> LOG IN </li>
        </ul>
    )
}

class NavigationBar extends Component {
    constructor(props){
        super(props);

        this.state = {
            hamburgerIsOpen: false
        }

        this.openHamburger = this.openHamburger.bind(this);
    }

    //0: none
    //1: show login
    //2: show signup
    openHamburger(){
        if (this.state.hamburgerIsOpen) {
            this.setState({hamburgerIsOpen:false});
        } else {
            this.setState({hamburgerIsOpen:true});
        }
    }

    render(){
        const transitionNames = {
            enter: styles.enter,
            enterActive: styles.enterActive,
            leave: styles.leave,
            leaveActive: styles.leaveActive
        }

        const transitionProperties = {
            transitionEnterTimeout:500,
            transitionLeaveTimeout:500
        }

        return (
            <div>
                <ul className={styles.navBar}>
                    <li onClick={() => this.props.showLogInOrSignUpView(0)} className={styles.navLinkLeft}> <Link className={styles.navLink} to="/">HOME</Link> </li>
                    <li onClick={() => this.props.showLogInOrSignUpView(0)} className={styles.navLinkLeft}> <Link className={styles.navLink} to="/about">ABOUT</Link> </li>
                    <li onClick={() => this.props.showLogInOrSignUpView(0)} className={styles.navLinkLeft}> <Link className={styles.navLink} to="/subscribe">SUBSCRIBE</Link> </li>
                    <li onClick={() => this.props.showLogInOrSignUpView(2)} className={styles.navLinkRight}> SIGN UP </li>
                    <li onClick={() => this.props.showLogInOrSignUpView(1)} className={styles.navLinkRight}> LOG IN </li>
                    <li onClick={() => this.openHamburger()} className={styles.navLinkRight}> <i className="fa fa-bars fa-lg"></i> </li>
                </ul>
                <Transition {...transitionProperties} transitionName={transitionNames}>
                    {(this.state.hamburgerIsOpen) ? <BurgerNav showLogInOrSignUpView={this.props.showLogInOrSignUpView}/> : null}
                </Transition>
                {(this.props.authView > 0) ? <AuthView/> : null}
            </div>
        );
    }
}

function mapStateToProps({authView}){
    return {authView}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {showLogInOrSignUpView},
        dispatch
    );
}


export default connect(mapStateToProps,mapDispatchToProps)(NavigationBar);
