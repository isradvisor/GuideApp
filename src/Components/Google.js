
import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import {  withRouter } from 'react-router-dom';

class Google extends Component {
  constructor() {
    super();
    this.state = {
      userDetails: {},
      isUserLoggedIn: false,
      email:'',
      picture:'',
      firstName:'',
      lastName:""
    };
  }
  responseGoogle = response => {
    this.setState({ userDetails: response.profileObj, isUserLoggedIn: true });
    const googleLogin = true;
    const facebookLogin = false;
    const GoogleUser = {
      Email:this.state.userDetails.email,
      FirstName:this.state.userDetails.givenName,
      LastName:this.state.familyName,
      facebookLogin:facebookLogin,
      googleLogin:googleLogin
  }
  localStorage.setItem('GoogleUser',JSON.stringify(GoogleUser))
  localStorage.removeItem('FacebookUser');
  localStorage.removeItem('SignUpUser');

    this.props.history.push({
      pathname: '/home/',

    });
  return <div>{this.props.PostGuideToSQLFromGoogle(this.state.userDetails)}</div>
  };
  logout = () => {
    this.setState({ isUserLoggedIn: false })
  };

  render() {
    return (
      <div className="App GoogleBTN">
        {!this.state.isUserLoggedIn && (
          <GoogleLogin
            clientId="383883505141-igdv29benmn8rp60edikg4j8ed5t20rs.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
           
            buttonText="Login With Google"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
          />
        )}
     
        </div>
    );
  }
}

export default withRouter(Google);