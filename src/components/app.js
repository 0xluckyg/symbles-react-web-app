import React, { Component } from 'react';
import NavigationBar from './navigation-bar';
import { CookiesProvider, withCookies, Cookies } from "react-cookie";
import {bindActionCreators} from 'redux';
import {getUserByToken, setUser} from '../actions/index';
import {connect} from 'react-redux';
import '../styles/general.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            cookies: new Cookies()
        }
    }

    componentWillMount(){        
        // const cookies = this.state.cookies;
        const token = this.state.cookies.get('token');
        if (token !== undefined) {
            const firstName = localStorage.getItem('firstName');
            const lastName = localStorage.getItem('lastName');
            const subscription = localStorage.getItem('subscription');            
            this.props.setUser({
                firstName, lastName, subscription, isLoggedIn: true
            })
            this.props.getUserByToken(token);
        } else {
            this.props.setUser({
                firstName: "", lastName: "", subscription: false, isLoggedIn: false, userEmail: ""
            });
        }
    }

    render() {
        return (
            <div>
                <NavigationBar/>
                {this.props.children}
            </div>
        );
    }
}

function mapStateToProps({filingSummary, userInfo}){
    return {filingSummary, userInfo};
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {getUserByToken, setUser},
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);