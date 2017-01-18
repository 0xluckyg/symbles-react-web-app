import React, {Component} from 'react';
import styles from '../../styles/auth-view.css';
import FacebookLogin from 'react-facebook-login';
import GoogleLogin from 'react-google-login';

class SignUp extends Component {
    constructor(props){
        super(props)

        this.responseFacebook = this.responseFacebook.bind(this);
        this.responseGoogle = this.responseGoogle.bind(this);
    }

    responseFacebook(response) {
        console.log(response);
    }

    responseGoogle(response) {
        console.log(response);
    }

    render(){
        return(
            <form onClick={this.handleClick} className={styles.signupBox}>
                <div className={styles.signupInputDiv}><input type="text" placeholder="First name"></input></div>
                <div className={styles.signupInputDiv}><input type="text" placeholder="Last name"></input></div>
                <div className={styles.signupInputDiv}><input type="text" placeholder="Email"></input></div>
                <div className={styles.signupInputDiv}><input type="password" placeholder="Password"></input></div>
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

export default SignUp;
