import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
// import Page from 'components/page'
// import ImageName from 'image/PATH';
// import Component from 'component/PATH';

class TemplatePage extends Component {
    constructor(props) {
        super(props);
  
        this.routeChange = this.routeChange.bind(this);
  
      };
  
      routeChange() {
          let path = `/path`;
          this.props.history.push(path);
      };

      render() {
    
        return (
            <div>
                <p>template</p>
                <p>this is the template page</p>
            </div>
        )
    };
                
}

export default withRouter(TemplatePage);