import React, { Component } from 'react';
import './Login.css';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    }
  }

  handleClick = () => {

  }

  render() {
    return (
      <div className="login-page" >
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button onClick={this.handleClick.bind(this)}>Login</button>
      </div>
    );
  }
}

export default LoginPage;
