import React, { Component } from 'react';
import '../styles/general.css';
import NavigationBar from './navigation-bar';
import { CookiesProvider, withCookies, Cookies } from "react-cookie";

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

export default App;