import React, { Component } from 'react';

export class KnowledgeCheck extends Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();

    this.state = {
      title: this.props.knowledgecheck.title,
      questions: this.props.knowledgecheck.questions,
    }
  }

  submitAnswers = () => {
    var tempState = {...this.state};
    const node = this.myRef.current;

    const answers = node.getElementsByClassName('answer');
    const questions = this.props.knowledgecheck.questions;
    var selected = [];

    for(let i = 0; i < answers.length; i++){
      if(answers[i].checked){
        selected.push(answers[i].value);
      }
    }

    if(selected.length !== questions.length){
      alert("answer all questions");
      return;
    }

    for(let i = 0; i < questions.length; i++){
      let selectedIndex = selected[i];
      if(questions[i].answers[selectedIndex].correct){
        tempState.questions[i].correct = "correct";
      }
      else{
        tempState.questions[i].correct = "wrong";
      }
    }
    this.setState(tempState);
  }

  render(){
    return (
      <div id="knowledgeCheck" className="col-md-12 mx-auto" ref={this.myRef}>
      <form id="myForm">
        <h3>{this.state.title}</h3>
        {this.state.questions.map((question, index)=>{

          return(
            <Question
              key={index}
              question={question}
              questionIndex={index}
            />)
        })}

        <div className="feedback">
        </div>
        <a className="btn btn-default" onClick={this.submitAnswers}>Submit Answers</a>
      </form>
    </div>
    );
  }
}

const Question = (props) => {
  return (
    <li className={`question ${props.question.correct}`}>
      <p>{props.question.body}</p>
      {props.question.answers.map((answer, index)=>(
        <Answer
          key={index}
          answer={answer}
          questionIndex={props.questionIndex}
          answerIndex={index}
        />
      ))}
    </li>
  );
}

const Answer = (props) => {
  return (
    <div>
      <input className="answer" type="radio" name={`question-${props.questionIndex}`} value={props.answerIndex}/>
      <label>
        {props.answer.answer}
      </label>
    </div>
  );
}

export default KnowledgeCheck;
