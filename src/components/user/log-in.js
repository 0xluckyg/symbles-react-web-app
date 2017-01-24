import React, {Component, PropTypes} from 'react';
import styles from '../../styles/auth-view.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signInUser} from '../../actions';

class LogIn extends Component {
    constructor(props){
        super(props)

        this.state = {
            userEmail:"",
            userPassword:""
        };

        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onEmailChange(event){
        this.setState({userEmail:event.target.value});
    }

    onPasswordChange(event){
        this.setState({userPassword:event.target.value});
    }

    onFormSubmit(event){
        event.preventDefault();

        this.props.signInUser(this.state)
        this.setState({
            userEmail:"",
            userPassword:""
        });
    }

    responseFacebook(response) {
        console.log(response);
    }

    responseGoogle(response) {
        console.log(response);
    }

    render(){
        return(
            <form onSubmit={this.onFormSubmit} className={styles.logInBox}>
                <input
                    type="text"
                    placeholder="Email"
                    value={this.state.userEmail}
                    onChange={this.onEmailChange}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={this.state.userPassword}
                    onChange={this.onPasswordChange}
                />
                <button className={styles.loginSubmit} type="submit">SUBMIT</button>
                <div className={styles.externalAuth}>
                    <FacebookLogin
                        appId="1088597931155576"
                        autoLoad={true}
                        fields="name,email,picture"
                        callback={this.responseFacebook}
                        cssClass={styles.facebookAuth}
                        textButton=""
                        icon={<i className="fa fa-facebook fa-lg"></i>}/>
                    <GoogleLogin
                        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                        buttonText=""
                        onRequest={this.respxvonseGoogle}
                        onSuccess={this.responseGoogle}
                        className={styles.googleAuth}
                        onFailure={this.responseGoogle}>
                        <i className="fa fa-google fa-lg"></i>
                    </GoogleLogin>
                </div>
            </form>
        )
    }
}

LogIn.propTypes = {
    userInfo: PropTypes.object,
    signInUser: PropTypes.func
}

function mapStateToProps({userInfo}){
    return {userInfo}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {signInUser},
        dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
