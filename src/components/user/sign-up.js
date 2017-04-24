import React, {Component} from 'react';
import styles from '../../styles/auth-view.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {signUpUser} from '../../actions';


class SignUp extends Component {
    constructor(props){
        super(props)

        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            password:""
        }

        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);

        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onFirstNameChange = this.onFirstNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    onFirstNameChange(event){this.setState({firstName:event.target.value})}
    onLastNameChange(event){this.setState({lastName:event.target.value})}
    onEmailChange(event){this.setState({email:event.target.value})}
    onPasswordChange(event){this.setState({password:event.target.value})}

    onFormSubmit(event) {
        event.preventDefault();

        this.props.signUpUser(this.state)
        this.setState({
            firstName:"",
            lastName:"",
            email:"",
            password:""
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
            <form onSubmit={this.onFormSubmit} className={styles.signupBox}>
                <div className={styles.signupInputDiv}>
                    <input onChange={this.onFirstNameChange} type="text" placeholder="First name"/>
                </div>
                <div className={styles.signupInputDiv}>
                    <input onChange={this.onLastNameChange} type="text" placeholder="Last name"/>
                </div>
                <div className={styles.signupInputDiv}>
                    <input onChange={this.onEmailChange} type="text" placeholder="Email"/>
                </div>
                <div className={styles.signupInputDiv}>
                    <input onChange={this.onPasswordChange} type="password" placeholder="Password"/>
                </div>
                <button className={styles.signupSubmit} type="submit">SIGN UP</button>
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
                        onRequest={this.responseGoogle}
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

function mapStateToProps({userInfo}){
    return {userInfo}
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(
        {signUpUser},
        dispatch
    )
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp);
