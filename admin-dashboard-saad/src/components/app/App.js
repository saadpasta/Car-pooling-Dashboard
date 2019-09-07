import React, { Component } from 'react';
import { Row, Col, Button, Form, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// import styles
import '../../styles/app.css';
import '../../styles/typography.css';
// not using
// import logos from '../../assets/images/logo.svg';
// import '../../../stylesheets/styles.css';
import PrivateRoute from '../../components/PrivateRoute'
import TemplatePage from "../../pages/TemplatePage";
import IndexPage from "../../pages/IndexPage";
import LoginPage from "../../pages/LoginPage";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

function LoginPageRender() {
  return <LoginPage />
};

function IndexPageRender() {
  return <IndexPage />
};

function TemplatePageRender() {
  return <TemplatePage />
};

function ErrorPageRender() {
  return <div>
           <h2>error. you are lost</h2>
           <a href="/"><p>go home</p></a>
         </div>
};

function App() {

  // if (this.state.isLoggedIn) {
  //   return (
  //     <Router>
  //       <Route path="/login" component={LoginPageRender} />
  //     </Router>
  //   )
  // }
  return (
    <Router>
      <div>
        <header>
          <Header />
        </header>

        <Sidebar />
        
        <Route path="/login" component={LoginPageRender} />
        <PrivateRoute path="/" exact component={IndexPageRender} />
        <PrivateRoute path="/template" exact component={TemplatePageRender} />
        {/* <Route path="*" component={ErrorPageRender} /> */}
      </div>
    </Router>

  );
}

export default App;