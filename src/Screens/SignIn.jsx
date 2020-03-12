import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBBtn, MDBIcon, MDBModalFooter } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '../Css/SignIn.css';
import logo from '../Img/logo.png';
import Facebook from "../Components/Facebook.js";
import { Link, Redirect, withRouter } from 'react-router-dom';
import Google from '../Components/Google';
import { Form } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="#">
                IsraVisor
        </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


class SignIn extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: "",
            users: props.Allusers,
            faceLogin: [],
        }
    }
    componentWillMount() {
        console.log(this.state.users)
    }
    HandelEmailInput = (e) => {
        this.setState({
            email: e.target.value
        }
        )
    }

    HandelPasswordInput = (e) => {
        this.setState({
            password: e.target.value
        }
        )
    }

    UserExists = () => {
        const tempUsers = this.state.users;
        let ifExist = false;
        console.log(tempUsers);
        for (let i = 0; i < tempUsers.length; i++) {
            const element = tempUsers[i];
            console.log(element)
            if (element.Email == this.state.email && element.PasswordGuide == this.state.password) {
                ifExist = true;
            }

        }
        if (ifExist) {
            this.props.history.push({
                pathname: '/home',
            });
        }
        else {
            alert("Email or Password is wrong")
        }
    }


    render() {
        return (
            <MDBContainer>
                <MDBRow className="RowDivSignIn">
                    <MDBCol md="6" className="LogoDiv"><img src={logo} /></MDBCol>
                    <MDBCol className="ColDivSignIn" md="6">
                        <MDBCard className="CardDivSignIn">
                            <MDBCardBody className="mx-4">
                                <div className="text-center">
                                    <h3 className="dark-grey-text mb-5">
                                        <strong>Sign in</strong>
                                    </h3>
                                </div>
                                <div className="text-center mb-3">
                                    <MDBInput
                                        label="Your email"
                                        group
                                        type="email"
                                        validate
                                        error="wrong"
                                        success="right"
                                        onChange={this.HandelEmailInput}
                                    />
                                    <MDBInput
                                        label="Your password"
                                        group
                                        type="password"
                                        validate
                                        containerClass="mb-0"
                                        onChange={this.HandelPasswordInput}

                                    />
                                </div>

                                <div className="divRemember">
                                    <FormControlLabel
                                        control={<Checkbox value="remember" color="primary" />}
                                        label="Remember me"
                                    />
                                </div>
                                <div className="text-center mb-3 btnSignIn">
                                    <MDBBtn
                                        type="button"
                                        gradient="blue"
                                        rounded
                                        className="btn-block z-depth-1a"
                                        onClick={this.UserExists}
                                    >
                                        Sign in
                </MDBBtn>
                                </div>
                                <div>
                                    <div className="or-seperator"><i>or</i></div>

                                </div>

                                <div className="text-center mb-3">
                                    <Facebook faceLogin={this.state.faceLogin} PostGuideToSQLFromFacebook={this.props.PostGuideToSQLFromFacebook} />
                                    <Google PostGuideToSQLFromGoogle={this.props.PostGuideToSQLFromGoogle} />
                                </div>


                            </MDBCardBody>
                            <MDBModalFooter className="mx-5 pt-3 mb-1">
                                <div className="row col-12">
                                    <div className="col-6 forgotPass">
                                        <p className="font-small blue-text d-flex justify-content-end"><Link to="/reset">Forgot Password?</Link></p>
                                    </div>
                                    <div className="col-6 signUp">
                                        <p className="font-small grey-text d-flex justify-content-end">
                                            Not a member?
                                <Link to="/SignUp">SignUp</Link>
                                        </p>
                                    </div>
                                </div>
                            </MDBModalFooter>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </MDBContainer>
        );
    }
}

export default withRouter(SignIn);

