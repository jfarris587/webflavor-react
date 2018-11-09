import React from "react";

const title = "MODAL FEATURES";


const layout =
<React.Fragment>
  <div className="row">
    <div className="col-md-6">
      <h4>Custom Modal Interactive</h4>
      <p>The custom modal interactive allows for any HTML markup to be placed into the modal when triggered by any other feature. This works by placing the custom HTML into the &lt;modal&gt; tag, and then naming the triggering functions in the same node.</p>
      <p>To see an example of the custom interactive... </p>
      <a className="download bolded">CLICK TO ACTIVATE MODAL</a>

      <br/>
      <br/>

      <p>You can also have multiple modals on the same page like any other interactive...</p>
      <a className="download bolded">CLICK TO ACTIVATE MODAL</a>
    </div>

    <div className="col-md-6">
      <img src="media/img/2_1.jpg" alt="modal"/>
    </div>
  </div>
</React.Fragment>;

const Page = {
  title,
  layout,
};

export default Page;
