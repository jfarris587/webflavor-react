import React from "react";

const title = "TEMPLATE";

const layout =
    <React.Fragment>
      <div className="row">
        <div className="col-md-12"><p>The first part in developing a specific page in a course is using the Bootstrap grid system. This grid system allows the developer to place text, content, and interactives in any layout that they choose by implementing the Bootstrap classNamees. This page demonstrates a potential layout with the Bootstrap grid.</p></div>
      </div>

      <div className="row">
        <div className="col-12 col-md-3 p-0"><div className="componentContainer color1"></div></div>

        <div className="col-12 col-md-9 p-0"><div className="componentContainer color1"></div></div>
      </div>

      <div className="row">
        <div className="col-12 col-md-4 p-0"><div className="componentContainer color1"></div></div>

        <div className="col-12 col-md-8 p-0"><div className="componentContainer color1"></div></div>
      </div>

      <div className="row">
        <div className="col-12 col-md-12 p-0"><div className="componentContainer color1"></div></div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8 p-0"><div style={{height: "100%"}} className="componentContainer color1 size2"></div></div>

        <div className="col-12 col-md-4 p-0">
          <div className="row">
            <div className="col-6 col-md-12 inner-col-top"><div className="componentContainer color1"></div></div>
            <div className="col-6 col-md-12 inner-col-bottom"><div className="componentContainer color1"></div></div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-4 p-0"><div className="componentContainer color1"></div></div>

        <div className="col-12 col-md-8 p-0"><div className="componentContainer color1"></div></div>
      </div>

      <div className="row">
        <div className="col-12 col-md-4 p-0">
          <div className="row">
            <div className="col-6 col-md-12 inner-col-top"><div className="componentContainer color1"></div></div>
            <div className="col-6 col-md-12 inner-col-bottom"><div className="componentContainer color1"></div></div>
          </div>
        </div>

        <div className="col-12 col-md-8 p-0"><div style={{height: "100%"}} className="componentContainer color1 size2"></div></div>
      </div>

      <div className="row margin-below">
        <div className="col-12 col-md-8 p-0"><div className="componentContainer color1"></div></div>
        <div className="col-12 col-md-4 p-0"><div className="componentContainer color1"></div></div>
      </div>
    </React.Fragment>;

const Page = {
  title,
  layout,
};

export default Page;
