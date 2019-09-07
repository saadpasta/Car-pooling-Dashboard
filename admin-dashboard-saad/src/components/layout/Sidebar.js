import React, { Component, Link } from 'react';
import { Row, Col, Image, NavItem, Nav } from 'react-bootstrap';
import { Navbar } from 'reactstrap';
import { withRouter } from 'react-router-dom';
// import Page from 'components/page'
// import logo from 'image/logo.png';
// import Component from 'component/PATH';

// using this for reference
// https://github.com/reduction-admin/react-reduction/blob/master/src/components/Layout/Sidebar.js

// TODO
// need to add/fix keys


class Sidebar extends Component {

  render() {

    return (
      <div>
        <div className="sidebar-div">
          <i class="fa fa-align-left whiteIconSideBar"></i>
          <div className="drawer-image2">
            <i class="fa fa-envelope whiteIconSideBar"></i>
            <i class="fa fa-cog whiteIconSideBar"></i>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Sidebar);