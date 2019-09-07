import React, { Component, Link } from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { tsConstructorType } from '@babel/types';
import './Header.scss'
import logo from "../../assets/img/logo.png"
import headerLeft from "../../assets/img/header-left.PNG"
import profile from "../../assets/img/profile.svg"


// import Page from 'components/page'
// import logo from 'image/logo.png';
// import Component from 'component/PATH';

// using this for reference
// https://github.com/reduction-admin/react-reduction/blob/master/src/components/Layout/Header.js



class Header extends Component {

  render() {

    return (
      <div className="header-div">
        <img src={logo} className="header-logo"></img>
        <div>
          <i class="fa fa-bell fontAwesomeIcon"></i>
          <i class="fa fa-envelope fontAwesomeIcon"></i>
          <i class="fa fa-user fontAwesomeIcon"></i>

        </div>
      </div>
    );
  }
}

export default withRouter(Header);