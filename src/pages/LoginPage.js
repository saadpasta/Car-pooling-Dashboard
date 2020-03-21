import React, { Component, Link } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import '../styles/components/login-page-style.css'
import { Alert } from 'reactstrap';
// import Page from 'components/page'
// import logo from 'image/logo.png';
// import Component from 'component/PATH';
  

const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );
  
  const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
  
    // validate form errors being empty
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
  
    // validate the form was filled out
    Object.values(rest).forEach(val => {
      val === null && (valid = false);
    });
  
    return valid;
  };
  
  class LoginPage extends Component {
    constructor(props) {
      super(props);
  
      this.state = {
        // alert
        visible: false,

        // form validation
        email: null,
        password: null,
        formErrors: {
          email: "",
          password: ""
        }
      };

      this.routeChange = this.routeChange.bind(this)
      this.onDismiss = this.onDismiss.bind(this);
      this.onEntertain = this.onEntertain.bind(this);
    };

    // routing
    routeChange() {
        let path = `/`;
        this.props.history.push(path);
    };

    // alert
    onDismiss() {
      this.setState({ visible: false });
    }
    onEntertain() {
      this.setState({ visible: true })
    }
  
    handleSubmit = e => {
      e.preventDefault();
  
      if (formValid(this.state)) {
        console.log(`
          --SUBMITTING--
          Email: ${this.state.email}
          Password: ${this.state.password}
        `);
      } else {
        console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
      }
    };
  
    handleChange = e => {
      e.preventDefault();
      const { name, value } = e.target;
      let formErrors = { ...this.state.formErrors };
  
      switch (name) {
        case "email":
          formErrors.email = emailRegex.test(value)
            ? ""
            : "This email is invalid";
          break;
        case "password":
          formErrors.password =
            value.length < 6 ? "This password is invalid" : "";
          break;
        default:
          break;
      }
  
      this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };
  
    render() {
      const { formErrors } = this.state;
  
      return (
  
        <Row className="login-row">
            <Col md={7} className="login-left">

            
              {/* <a href="https://thetripbuddyapp.com"> */}
                <Image className="login-logo"
                      src="/logo.png"
                      fluid/>
              {/* </a> */}
              <div className="wrapper">
              <div className="form-wrapper login-form">
                <form onSubmit={this.handleSubmit} noValidate>
                  <div className="email">
                    <img className="login-icon" src="/envelope.svg"></img>
                    <Alert className="login-alert" color="danger" isOpen={this.state.visible} toggle={this.onDismiss}>
                      Wrong password. Try again or click 'forgot your password?' to reset it.
                    </Alert>
                    <input
                      className={formErrors.email.length > 0 ? "error" : null}
                      placeholder="Email"
                      type="email"
                      name="email"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.email.length > 0 && (
                      <span className="error-message">{formErrors.email}</span>
                    )}
                  </div>
                  <div className="password">
                    <img className="login-icon" src="./lock.svg"></img>
                    <input
                      className={formErrors.password.length > 0 ? "error" : null}
                      placeholder="Password"
                      type="password"
                      name="password"
                      noValidate
                      onChange={this.handleChange}
                    />
                    {formErrors.password.length > 0 && (
                      <span className="error-message-password">{formErrors.password}</span>
                    )}
                  </div>
                  
                  <div className="">
                    <small className="login-form-forgot center">
                      <a onClick={() => {
                          prompt('Please enter your email and we will send you instructions for reseting your password.', '');
                         }}>
                         forgot your password?
                      </a>
                    </small>
                    <br></br>
                        <button 
                        className="login-submit center" 
                        type="submit"
                        onClick={this.onEntertain}
                        // onClick={this.routeChange} -> to redirect to other page -> see routeChange() above
                        >
                        SIGN IN
                        </button>
                  </div>
                </form>
              </div>
            </div>
            <p className="login-footer-text">Copyright tripBuddy © 2019 - All Rights Reserved</p>
            </Col>
  
            <Col className="login-right">
              <h1 className="login-right-text center">Welcome Back!</h1>
              <h4 className="login-right-subtext center">To keep connected with us, please login with your credentials</h4>
              <img className="login-right-image" src="/login.svg"></img>
            </Col>
  
          </Row>
      );
    }
  }
  
  export default withRouter(LoginPage);