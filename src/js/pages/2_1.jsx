import React from "react";

const title = "MODAL";
const modalData = `
<h1>THIS IS A MODAL DEMO</h1>

<p>this is the content of the modal where you can put whatever html content you want. Images and text all work...</p>
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

<img style="width:100%" src="media/img/webflavorLogo.jpg" alt="logo">
<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>`;

const layout =
<React.Fragment>
  <div className="row">
    <div className="col-md-6">
      <h4>Custom Modal Interactive</h4>

      <p>The custom modal interactive allows for any HTML markup to be placed into the modal when triggered by any other feature. This works by placing the custom HTML into the tag, and then naming the triggering method in the same node.</p>

      <p>To see an example of the custom interactive... </p>
      <a className="download bolded">CLICK TO ACTIVATE MODAL</a>
      <br/>
      <br/>
      <p>You can also have multiple modals on the same page like any other interactive...</p>
      <a className="download bolded">CLICK TO ACTIVATE MODAL</a>
    </div>

    <div className="col-md-6">
      <img src="media/img/2_1.jpg" alt="popup"/>
    </div>
  </div>
</React.Fragment>;

const Page = {
  title,
  layout,
  modalData,
};

export default Page;
