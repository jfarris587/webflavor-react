import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../js/components/PageTitle';
import Hotspot from "../../js/interactives/Hotspot";

const state = {
  TITLE: "HOTSPOTS",
  CHAPTER_TITLE: "INTERACTIVES",

  hotspot_1: {
    img: 'media/img/City-Map-2.jpg',
    spots:[
      <ul>
        <li>Vix debitis lucilius ut, quo id porro timeam honestatis.</li>
        <li>Vim exerci mandamus cu, sonet molestiae cu pri.</li>
        <li>Fuisset instructior vel ne, ubique malorum legendos sit et.</li>
      </ul>,

      <ul>
        <li>Vix debitis lucilius ut, quo id porro timeam honestatis.</li>
        <li>Vim exerci mandamus cu, sonet molestiae cu pri.</li>
        <li>Fuisset instructior vel ne, ubique malorum legendos sit et.</li>
      </ul>,

      <ul>
        <li>Vix debitis lucilius ut, quo id porro timeam honestatis.</li>
        <li>Vim exerci mandamus cu, sonet molestiae cu pri.</li>
        <li>Fuisset instructior vel ne, ubique malorum legendos sit et.</li>
      </ul>,
    ]
  },

  hotspot_2: {
    img: 'media/img/City-Map.jpg',
    spots:[
      <ul>
        <li>Vix debitis</li>
        <li>Vim exerci mandamus</li>
        <li>Fuisset instructior vel</li>
      </ul>,

      <ul>
        <li>Vix debitis</li>
        <li>Vim exerci mandamus</li>
        <li>Fuisset instructior vel</li>
      </ul>,

      <ul>
        <li>Vix debitis</li>
        <li>Vim exerci mandamus</li>
        <li>Fuisset instructior vel</li>
      </ul>,
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
            <p className="top-paragraph">The following is a Hot Spot component. Hot Spots allow a developer to map spots on a image with popup information that can be any HTML he/she wants to use. The component requires an image, and dynamically adds the spots onto the image with the correct popup content. To adjust the location of the spots on the image, the developer has to adjust the CSS of the spots which are absolute positioning based on percentages relative to the container, which allows for responsiveness.</p>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-md-8">
            <Hotspot
              hotspot={state.hotspot_1}
            />
          </div>

          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <p>Both of the components on the page are Hot Spots with the same content. This shows the responsiveness built into the component that allows for its use on mobile devices. The Hot Spots can be placed in to the grid in unique ways for different user experiences.</p>
              </div>
              <div className="col-md-12">
                <Hotspot
                  hotspot={state.hotspot_2}
                />
              </div>
            </div>
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
