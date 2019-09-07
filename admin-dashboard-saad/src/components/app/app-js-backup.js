import React, { Component } from 'react';
import { Row, Col, Button, Form, Image } from 'react-bootstrap'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import '../../styles/app.css';
import '../../styles/typography.css';
// not using
// import logos from '../../assets/images/logo.svg';
// import '../../../stylesheets/styles.css';

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

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null,
      formErrors: {
        email: "",
        password: ""
      }
    };
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

      <Row>
          <Col md={8} className="">
            
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
                  <img className="login-icon" src="/lock.svg"></img>
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
                        alert('An email has been sent to you with instructions on how to reset your password.');
                       }}>
                       forgot your password?
                    </a>
                  </small>
                  <br></br>
                  <button 
                    className="login-submit center" 
                    type="submit"
                    onClick={() => {
                      alert('Verify credentials');
                    }}>
                    SIGN IN
                  </button>
                </div>
              </form>
            </div>
          </div>
          </Col>

          <Col className="login-mask">
            <h1 className="login-right-text center">Welcome Back!</h1>
            <h4 className="login-right-subtext center">To keep connected with us, please login with your credentials</h4>
            {/* <Image className="redbg" src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" fluid /> */}
          </Col>

        </Row>

      
      
    );
  }
}

export default App;


// function addInputSVGs() {
//   var mailimg = document.createElement('IMG');
//   mailimg.setAttribute("id", "mailimg");
//   mailimg.setAttribute("src", "/envelope.svg");
//   var x = document.getElementById('emailInput');
//   x.parentElement.prepend(mailimg);

//   var lockimg = document.createElement('IMG');
//   lockimg.setAttribute("id", "lockimg");
//   lockimg.setAttribute("src", "/lock.svg");
//   var y = document.getElementById('passwordInput');
//   y.parentElement.prepend(lockimg);
// }

// window.onload= function() {
//   addInputSVGs();
// };

// function MyVerticallyCenteredModal(props) {
//   return (
//     <Modal
//       {...props}
//       size="md"
//       aria-labelledby="contained-modal-title-vcenter"
//       centered
//     >
//       <Modal.Header closeButton>
//         <Modal.Title id="contained-modal-title-vcenter">
//           Forgot your password?
//         </Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form.Group controlId="emailInput">
//           <Form.Control type="email" placeholder="Email" />
//         </Form.Group>
//         <Button className="left" variant="primary" type="submit">
//           Reset password
//         </Button>
//         <Button className="right" onClick={props.onHide}>Cancel</Button>
//       </Modal.Body>
//     </Modal>
//   );
// }

// function checkValiditE() {
//   var x = document.getElementById("emailInput");
//   // var 
//   var y = x.checkValidity();
//   if (!y) {
//     alert("dope, you didn't fuck up");
//   }
//   else {
//     alert("you fucked up");
//   }
//   // alert("swag");

// }

// function Login() {
//   const [modalShow, setModalShow] = React.useState(false);

//   return (
        // <Row>
        //   <Col md={8} className="">
        //     <Image className="login-logo"
        //            src="/logo.png"
        //            fluid/>
        //       <Form className="login-form">
        //         <Form.Group controlId="emailInput">
        //           <Form.Control className="login-form-input-box login-form-text is-valid" type="email" placeholder="Email" />
        //         </Form.Group>
        //         <Form.Group controlId="passwordInput">
        //           <Form.Control className="login-form-input-box login-form-text is-invalid" type="password" placeholder="Password" />
        //             <Form.Text className="text-muted login-form-forgot">
        //             <a controlId="login-form-forgot-text" onClick={() => setModalShow(true)}>Forgot your password?</a>
        //             </Form.Text>
        //           <MyVerticallyCenteredModal
        //             show={modalShow}
        //             onHide={() => setModalShow(false)}
        //           />
        //         </Form.Group>
        //         <Button className="text-uppercase middle login-submit" variant="primaryzzz" onClick={() => checkValiditE()} type="submitzzz">
        //           Sign in
        //         </Button>
        //       </Form>
        //   </Col>

        //   <Col className="login-mask">
        //     {/* <Image className="redbg" src="https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" fluid /> */}
        //   </Col>

        // </Row>
//   );
// }

// export default Login;