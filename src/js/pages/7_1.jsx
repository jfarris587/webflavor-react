import React from "react";

const title = "COMPLETION";

const layout =
  <React.Fragment>
    <div className="row">
      <div className="col-sm-6">
        <p id="sectionComplete">Please select the <span className="bolded">Complete for Credit</span> button below to receive credit for this course.</p>
      </div>
    </div>

    <div className="row margin-below">
      <div className="offset-1 col-sm-4">
        <a className="btn btn-default d-block mx-auto btn-complete" id="btnComplete" role="button">Complete for Credit</a>
      </div>
    </div>

    <div className="row">
      <div className="col-sm-6">
        <p className="top-paragraph">You are among the first to take this course. We would appreciate your feedback.</p>
      </div>
    </div>

    <div className="row">
      <div className="offset-1 col-sm-4">
        <a className="btn btn-default d-block mx-auto" href="https://www.gpstrategies.com" target="_blank">Take Survey</a>
      </div>
    </div>
  </React.Fragment>

const Page = {
  title,
  layout,
};

export default Page;
