import React, { Component } from 'react';
import './Content.css';

const quiz = [
  {
    question: "Name Surname",
    answer: "+77777777",
  },
  {
    question: "Name Surname",
    answer: "+77777777",
  },
  {
    question: "Name Surname",
    answer: "+77777777",
  },
]

function QuizCard(props){
  return (
    <div className="person-card" >
      <h5>{props.question}</h5>
      <p>{props.answer}</p>
    </div>
  )
}

class QuizCard extends Component {
  constructor(props) {
    super(props);
  }
  onClick = () => {
    
  }
  render(){
    return (
      <div className="person-card" >
        <h5>{this.props.question}</h5>
        <p>{this.props.answer}</p>
      </div>
    )
  }
}

class Quiz extends Component {
  render() {
    return (
      <div className="Content" >
        <div>
          { quiz.map((p, i) => {
            return (
              <QuizCard key={i} question={p.question} answer={p.answer} />
            )
          })}
        </div>
      </div>
    );
  }
}

export default Quiz;
