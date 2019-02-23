import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './Header.css';

class Header extends Component {
  constructor() {
    this.state = {
      isLoggedIn: true
    }
  }
  
  render() {
    // let isLoggedIn = true;
    return (
      <div className="header" >
        <span>Logo</span>
        { (!this.state.isLoggedIn)? 
          <Button type="primary">Login</Button>
        :
          <Button type="primary">Logout</Button>
        }
      </div>
    );
  }
}

export default Header;
