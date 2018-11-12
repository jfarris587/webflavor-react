import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../js/components/PageTitle';
import FlipCard from "../../js/interactives/FlipCard";

const state = {
  TITLE: "FLIP CARDS",
  CHAPTER_TITLE: "INTERACTIVES",

  flipcard_1: {
    card: [
      {
        front: <h4>Nullam Nisi</h4>,
        back: <p>Curabitur accumsan, orci mostie cond aliquam, eros eros elementum ex.
        <br/>
        <br/>
        Pellentesque id arcu sed est vulputate consequat nec id dolor.</p>
      },
      {
      front: <h4>Curabitur</h4>,
      back: <p>Fermentum et venenatis in, vulputate sit amet diam
      <br/>
      <br/>
      Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
      }
    ]
  },

  flipcard_2: {
    card: [
      {
        minHeight: 400,
        background: "media/img/4_1.jpg",
        back: <p>Fermentum et venenatis in, vulputate sit amet diam
        Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
    },
    {
      minHeight: 400,
      background: "media/img/4_2.jpg",
      back: <p>Fermentum et venenatis in, vulputate sit amet diam
      <br/>
      <br/>
      Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
    }
    ]
  },

  flipcard_3: {
    card: [
      {
        minHeight: 400,
        background: "media/img/4_3.jpg",
        back: <p>Fermentum et venenatis in, vulputate sit amet diam
        Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
    },
    {
      minHeight: 400,
      background: "media/img/4_4.jpg",
      back: <p>Fermentum et venenatis in, vulputate sit amet diam
      <br/>
      <br/>
      Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
    }
    ]
  },

  flipcard_4: {
    card: [
      {
      front: <h4>Curabitur</h4>,
      back: <p>Fermentum et venenatis in, vulputate sit amet diam
      <br/>
      <br/>
      Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
      },
      {
      front: <h4>Curabitur</h4>,
      back: <p>Fermentum et venenatis in, vulputate sit amet diam
      <br/>
      <br/>
      Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
    },
    {
      minHeight: 0,
      front: <h4>Curabitur</h4>,
      back: <p>Fermentum et venenatis in, vulputate sit amet diam
      <br/>
      <br/>
      Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
    },
    {
      minHeight: 0,
      front: <h4>Curabitur</h4>,
      back: <p>Fermentum et venenatis in, vulputate sit amet diam
      <br/>
      <br/>
      Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
    }
    ]
  },

  flipcard_5: {
    card: [
      {
      front: <h4>Nullam Nisi</h4>,
      back: <p>Curabitur accumsan, orci mostie cond aliquam, eros eros elementum ex.
      <br/>
      <br/>
      Pellentesque id arcu sed est vulputate consequat nec id dolor.</p>
    },
    {
      front: <h4>This test shows that the front height can dictate the height of the entire flip card and is dynamic css code for
      <br/><br/>
      </h4>,
      back: <p>Fermentum et venenatis in, vulputate sit amet diam
      <br/>
      <br/>
      Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
    },
    {
      front: <h4>Curabitur</h4>,
      back: <p>Fermentum et venenatis in, vulputate sit amet diam
      <br/>
      <br/>
      Ut a tortor turpis. Aliquam quis enim at metus commodo hendrerit sit amet eu nisi.</p>
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
          <div className="col-sm-12">
            <p>Flip Cards are another interactive component that can be implemented through the WebFlavor Template</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <FlipCard
              flipcard={state.flipcard_1}
              />
          </div>

          <div className="col-md-4">
            <p>The Flip Card component can have either a clickable button to flip the card, or it can have the user click anywhere on the card instead. This is declared in the element's xml tags. The flip card to the left shows the how it works with this feature instead of the button</p>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <FlipCard
              flipcard={state.flipcard_2}
              />
          </div>

          <div className="col-md-12">
            <FlipCard
              flipcard={state.flipcard_3}
              />
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <FlipCard
              flipcard={state.flipcard_4}
              />
          </div>
        </div>

        <div className="row">
          <div className="col-md-4">
            <p>Flip Card component can be broken up and placed anywhere on the page. The sizing is dynamic and dependent on how many Flip Cards are in each section, and they span the width of the container they are placed in. The four flip cards above are one full component. The two thumbnails to the right are also one full component. One component takes up the entire continer it is in. By diving columns into more rows/columns, you can place them practically anywhere. You can split up flip cards into as many components as needed for the layout of the page</p>
          </div>
          <div className="col-md-8">
            <FlipCard
              flipcard={state.flipcard_5}
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
