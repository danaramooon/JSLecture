import React, { Component } from 'react';
import './PersonCard.css';

class PersonCard extends Component {
  handleClick = () => {
    this.props.parentClick();
  }
  render() {
    return (
      <div className="person-card" >
        <div>
          <h5>{this.props.person.fullName}</h5>
          <p>{this.props.person.phone}</p>
          <button onClick={this.handleClick.bind(this)}>click</button>
        </div>
        <div>
          <p>{this.props.person.amount} KZT</p>
          <p>{this.props.person.deadline} days</p>
        </div>
      </div>
    );
  }
}

export default PersonCard;
