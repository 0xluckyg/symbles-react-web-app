import React from 'react';
import {Route, IndexRoute, Redirect} from 'react-router';
import App from './components/app'
import FilingSummaryList from './components/main/filing-summary-list';
import About from './components/secondary/about-us';
import Subscribe from './components/secondary/subscribe';
import MyPage from './components/secondary/my-page/index';
import {userInfo} from './reducers';
import {connect} from 'react-redux';
import { CookiesProvider, withCookies, Cookies } from "react-cookie";

function userLoggedIn() {        
    const cookies = new Cookies();    
    let loggedIn = false;
    if (cookies.get('token') !== undefined) {
        loggedIn = true;
    }

    return <Route exact path="/myPage" render={() => (
            loggedIn ? (                         
                <MyPage/>                
            ) : (
                <Redirect to="/"/>
            )
        )}/>
}

const Routes = (
        <div>
            <Route path="/" component={App}>
                <IndexRoute component={FilingSummaryList}/>
                <Route path="/about" component={About}/>
                <Route path="/subscribe" component={Subscribe}/>
                {userLoggedIn()}
            </Route>
        </div>
    )

export default Routes