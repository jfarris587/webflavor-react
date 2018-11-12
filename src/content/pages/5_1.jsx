import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../js/components/PageTitle';
import KnowledgeCheck from '../../js/interactives/KnowledgeCheck';

const state = {
  TITLE: "KNOWLEDGE CHECKS",
  CHAPTER_TITLE: "KNOWLEDGE CHECKS",

  knowledgecheck_1: {
    title: "Review I",
    questions: [
      {
        body: "The question body goes in this element. What answer is right?",
        answers: [
          {
            answer: "A",
            correct: false
          },
          {
            answer: "B",
            correct: false
          },
          {
            answer: "RIGHT ANSWER",
            correct: true
          },
          {
            answer: "D",
            correct: false
          }
        ]
      },
      {
        body: "The question body goes in this element. What answer is right?",
        answers: [
          {
            answer: "A",
            correct: false
          },
          {
            answer: "B",
            correct: false
          },
          {
            answer: "RIGHT ANSWER",
            correct: true
          },
          {
            answer: "D",
            correct: false
          }
        ]
      },
    ]
  },

  knowledgecheck_2: {
    title: "Review II",
    questions: [
      {
        body: "The question body goes in this element. What answer is right?",
        answers: [
          {
            answer: "A",
            correct: false
          },
          {
            answer: "B",
            correct: false
          },
          {
            answer: "RIGHT ANSWER",
            correct: true
          },
          {
            answer: "D",
            correct: false
          }
        ]
      },
      {
        body: "The question body goes in this element. What answer is right?",
        answers: [
          {
            answer: "A",
            correct: false
          },
          {
            answer: "B",
            correct: false
          },
          {
            answer: "RIGHT ANSWER",
            correct: true
          },
          {
            answer: "D",
            correct: false
          }
        ]
      },
    ]
  }
};

class Page extends Component {
  render(){
    return (
      <React.Fragment>
        <PageTitle
          title={state.TITLE}
          pageNum={this.props.pageNum}
          pageTotal={this.props.pageTotal}
        />
      
        <div className="row">
          <div className="col-md-12">
            <p className="top-paragraph">The following is a knowledge check to test your understanding of the course so far. You must attempt the quiz before advancing.</p>

          </div>
        </div>

        <div className="row margin-below">
          <div className="col-md-8">
            <KnowledgeCheck
              knowledgecheck={state.knowledgecheck_1}
              />
          </div>
          <div className="col-md-4">
            <KnowledgeCheck
              knowledgecheck={state.knowledgecheck_2}
              />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pageNum: state.tracking.currentChapter + 1,
    pageTotal: state.chapters.length
  }
}

const data = {
  state,
  Page: connect(
    mapStateToProps
  )(Page)
}

export default data;
