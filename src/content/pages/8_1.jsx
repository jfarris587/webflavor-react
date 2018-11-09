import React from "react";
import KnowledgeCheck from '../../js/interactives/KnowledgeCheck';

const title = "KNOWLEDGE CHECKS";

const knowledgecheck_1 = {
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
}

const knowledgecheck_2 = {
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

const layout =
<React.Fragment>
  <div className="row">
    <div className="col-md-12">
      <p className="top-paragraph">The following is a knowledge check to test your understanding of the course so far. You must attempt the quiz before advancing.</p>

    </div>
  </div>

  <div className="row margin-below">
    <div className="col-md-8">
      <KnowledgeCheck
        knowledgecheck={knowledgecheck_1}
        />
    </div>
    <div className="col-md-4">
      <KnowledgeCheck
        knowledgecheck={knowledgecheck_2}
        />
    </div>
  </div>
</React.Fragment>;

const Page = {
  title,
  layout,
};

export default Page;
