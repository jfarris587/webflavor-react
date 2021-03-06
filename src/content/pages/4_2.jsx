import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../js/components/PageTitle';
import Ctr from "../../js/interactives/Ctr";

const state = {
  TITLE: "CLICK TO REVEALS",
  CHAPTER_TITLE: "INTERACTIVES",

  ctr_1: {
    position: "right",
    sections: [
      {
        click: <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore?</p>,
        reveal: <p>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur...</p>
      },
      {
        click: <p>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?</p>,
        reveal: <p>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur...</p>
      }
    ]
  },

  ctr_2: {
    position: "right",
    sections: [
      {
        click: <img src="media/img/settings.png" alt="settings"/>,
        reveal: <p>Quis autem vel eum iure reprehenderit qui in ea  voluptate velit esse quam nihil molestiae...</p>
      }
    ]
  },

  ctr_3: {
    position: "right",
    sections: [
      {
        click: <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore?</p>,
        reveal: <p>veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur...</p>
      }
    ]
  },

  ctr_4: {
    position: "right",
    sections: [
      {
        click: <p>Position: Right</p>,
        reveal: <p>veritatis et quasi architecto beatae vitae...</p>
      }
    ]
  },

  ctr_5: {
    position: "bottom",
    sections: [
      {
        click: <p>Position: Bottom</p>,
        reveal: <p>veritatis et quasi architecto beatae vitae...</p>
      }
    ]
  },

  ctr_6: {
    position: "top",
    sections: [
      {
        click: <p>Position: Top</p>,
        reveal: <p>veritatis et quasi architecto beatae vitae...</p>
      }
    ]
  },

  ctr_7: {
    position: "left",
    sections: [
      {
        click: <p>Position: Left</p>,
        reveal: <p>veritatis et quasi architecto beatae vitae...</p>
      }
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
            <p className="top-paragraph">The following is a Click to reveal (CTR) component. The CTR boxes can contain any HTML a developer wants, which includes images and normal text. Using the Bootstrap Grid classNamees in the &lt;layout&gt; element, the CTR component can be placed anywhere. The placement of the reveal-section, can also be modified to be: Right, Left, Top</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Ctr
              ctr={state.ctr_1}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <p>The <span className="bolded">CTR component on the right of this text is the same demensions as the component above</span>, however, it  has one clickable box. To achieve the same demensions, the Bootstrap Grid classNamees must be applied properly. This row of content is divided up into this text and the CTR, since they have <span className="bolded">'col-md-6'</span>. Each box within the CTR takes up half of the container. If the CTR on the right was put into a container with a className of <span className="bolded">'col-md-12'</span> it would look like the one below...</p>
          </div>

          <div className="col-md-6">
            <Ctr
              ctr={state.ctr_2}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Ctr
              ctr={state.ctr_3}
            />
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-md-3">
            <Ctr
              ctr={state.ctr_4}
            />
          </div>
          <div className="col-md-3">
            <Ctr
              ctr={state.ctr_5}
            />
          </div>
          <div className="col-md-3">
            <Ctr
              ctr={state.ctr_6}
            />
          </div>
          <div className="col-md-3">
            <Ctr
              ctr={state.ctr_7}
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
