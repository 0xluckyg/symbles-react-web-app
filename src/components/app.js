import React, { Component } from 'react';
import NavigationBar from './navigation-bar';
import { CookiesProvider, withCookies, Cookies } from "react-cookie";
import {bindActionCreators} from 'redux';
import {getUserByToken} from '../actions/index';
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
        console.log(token);
        if (token !== undefined) {
            this.props.getUserByToken(token);
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
        {getUserByToken},
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);