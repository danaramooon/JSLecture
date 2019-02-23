import React, { Component } from 'react';
import './Content.css';
import PersonCard from '../personCard/PersonCard';

const komuYaDolzhen = [
  {
    fullName: "Name Surname",
    phone: "+77777777",
    amount: 30000,
    deadline: 20
  },
  {
    fullName: "Serik Surname",
    phone: "+77777777",
    amount: 10000,
    deadline: 2
  },
  {
    fullName: "Berik Surname",
    phone: "+77777777",
    amount: 5000,
    deadline: 10
  }
]

const ktoMneDolzhen = [
  {
    fullName: "Name Surname",
    phone: "+77777777",
    amount: 30000,
    deadline: 20
  },
  {
    fullName: "Serik Surname",
    phone: "+77777777",
    amount: 10000,
    deadline: 2
  },
  {
    fullName: "Berik Surname",
    phone: "+77777777",
    amount: 5000,
    deadline: 10
  }
]

class Content extends Component {

  handleClick = () => {
    console.log("child clicked");
  }
  render() {
    return (
      <div className="Content" >
        <div>
          <p className="title">Кому я должен</p>
          { komuYaDolzhen.map((p, i) => {
            return (
              <PersonCard key={i} person={p} parentClick={this.handleClick.bind(this)} />
            )
          })}
        </div>
        <div>
          <p className="title">Кто мне должен</p>
          { ktoMneDolzhen.map((p, i) => {
            return (
              <PersonCard key={i} person={p} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Content;
