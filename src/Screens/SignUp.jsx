import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';
import '../Css/SignUp.css';
import logo from '../Img/logo.png';
import { Link } from "react-router-dom";
import React, { Component } from 'react';
const guide = null;
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      confirmPassword: "",
      firstName:"",
      lastName:""
    }


  }
  HandelEmail = (e) => {
    this.setState({
      email: e.target.value
    }
    )
  }
  HandelPassword = (e) => {
    this.setState({
      password: e.target.value
    }
    )
  }
  HandelConfirmPassword = (e) => {
    this.setState({
      confirmPassword: e.target.value
    }
    )
  }
  HandelFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    }
    )
  }
  HandelLastName = (e) => {
    this.setState({
      lastName: e.target.value
    }
    )
  }
 

  CheckPasswordConfirm = () => {
    let password = this.state.password;
    let confirmPassword = this.state.confirmPassword;

    if (password != confirmPassword) {
      alert("Password not Match")
    }
    else {
      return <div>{this.props.PostGuideToSQL(this.guide)}</div>
    }

  }
  render() {
    this.guide = {
      email: this.state.email,
      password: this.state.password,
      firstName:this.state.firstName,
      lastName:this.state.lastName
    }
    return (
      <MDBContainer>
        <MDBRow className="RowDivSignIn">
          <MDBCol md="6" className="LogoDiv"><img src={logo} /></MDBCol>

          <MDBCol className="ColDivSignIn" md="6">
            <MDBCard className="CardDivSignIn">
              <MDBCardBody className="mx-4 CardBody">
                <div>
                  <Link to="/signIn"><i className="fa fa-undo" aria-hidden="true"></i></Link>
                </div>
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Sign Up</strong>
                  </h3>
                </div>
                <form>
                  <div className="grey-text">
                      <MDBInput
                        label="First Name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.HandelFirstName}
                      />
                      <MDBInput
                        label="Last Name"
                        icon="user"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.HandelLastName}
                      />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.HandelEmail}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      onChange={this.HandelPassword}
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                      onChange={this.HandelConfirmPassword}

                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn gradient="blue"
                      rounded
                      className="btn-block z-depth-1a" type="submit"
                      onClick={this.CheckPasswordConfirm}>
                      Register
                  </MDBBtn>
                  </div>
                </form>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}
export default SignUp;