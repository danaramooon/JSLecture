import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './App.css';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Content from './components/content/Content'
import LoginPage from './containers/Login'


function About() {
  return <h2>something else </h2>;
}

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Header />

          
          <Route path="/" component={Content} />  
          <Route path="/about/" component={About} />

          <Route path="/login/" component={LoginPage} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
