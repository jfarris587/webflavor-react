import React, { Component } from 'react';
import { connect } from 'react-redux';
import PageTitle from '../../js/components/PageTitle';
import Hotspot from '../../js/interactives/Hotspot';

const state = {
  TITLE: "WEBFLAVOR 3.0",
  CHAPTER_TITLE: "WEBFLAVOR",

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
  }
};

class Page extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  render(){
    return (
      <React.Fragment>
        <PageTitle
          title={state.TITLE}
          pageNum={this.props.pageNum}
          pageTotal={this.props.pageTotal}
        />

        <div className="row margin-below">
          <div className="col-lg-6">
            <p>WebFlavor is a development framework for creating responsive HTML5 courses. The framework uses the Grunt JavaScript task runner to build an optimized course output from a set of XML, CSS, and media source files.</p>

            <p>In order to modify the content of the course, the user needs to have an intermediate understanding of XML, HTML, and the Bootstrap CSS framework. Specifically, the user needs to know how to modify an existing XML document - including addition, removal, and changes of nodes – and how to modify HTML documents that are built upon the “Bootstrap” grid framework. Details can be found on the GitHub Repository</p>
          </div>

          <div className="col-lg-6">
            <img src="media/img/webflavorLogo.jpg" alt="logo"/>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-lg-8">
            <img src="media/img/devices.jpg" alt="devices"/>
          </div>

          <div className="col-lg-4">
            <h1>RESPONSIVE DESIGN</h1>
            <p>This version of WebFlavor is responsive, meaning it works on all devices for users to take the course. Whether on Desktop, Android, iPhone, iPad, tablet or any smaller viewing screen, the WebFlavor interface provides a responsive design for the user.</p>

            <p>WebFlavor course completion, interactives, and all other components are just as usable on the mobile responsive layout as they are on a desktop, and a user taking the course would have no problems on either device. </p>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-lg-6">
            <h1>ADAPTABLE INTERACTIVES</h1>
            <p>One of the key features of WebFlavor is the ability to use adaptable interactives that are premade for developers. Drag and Drops, flip cards, hot spots, knowledge checks, and more are all developed in JQuery and implemented in the framework. Developers now only have to add in their custom information for the interactives using the course page's XML files, and the interavtives will be rendered themselves.</p>

            <p>Custom interactives can be made with the same template and guidelines that the other interactives have, using normal JQuery or any other method that the developer might prefer.</p>
          </div>

          <div className="col-lg-6">
            <Hotspot
              hotspot={state.hotspot_1}
            />
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-lg-6">
            <img src="media/img/themes.jpg" alt="themes"/>
          </div>

          <div className="col-lg-6">
            <h1>Customizable Themes</h1>
            <p>Themes are another integral part of WebFlavor's features. The use of themes allows for developers to use the WebFlavor template for different types of courses, and allows them to customize CSS for a particular brand and then easily navigate from one theme to another.</p>

            <p>There are several premade themes that come with WebFlavor. However, these along are just the basics of what WebFlavor is capable of. With the use of SASS as a preprocessor for CSS, a developer can style the course to whatever CSS itself is capable to accomplishing.</p>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-lg-6">
            <h1>Page/Chapter Gating</h1>
            <p>Gating features allow for the course to gate certain pages or chapters until a user completes an action. There is soft-gating which requires users to simply visit all previous pages before continuing, and there is hard-gating which requires users to actually participate in an interactive before gaining access to the next pages.</p>
          </div>

          <div className="col-lg-6">
            <img src="media/img/gate.jpg" alt="gate"/>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-lg-4">
            <h1>Resources</h1>
            <p>The optional resources tab in the navigation allows for the course to have external resources, such as websites, workbooks, pdfs, etc. linked to the course for easy access.</p>
          </div>

          <div className="col-lg-4">
            <h1>Glossary</h1>
            <p>The optional glossary tab in the navigation allows for the course to have vocabulary words, definitions, and other important informatoin linked to the course for easy access.</p>
          </div>

          <div className="col-lg-4">
            <h1>Help</h1>
            <p>The optional help tab in the navigation allows for the course to have a section dedicated to giving instructions on how to take the course, if a learner gets confused.</p>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-lg-3">
            <img src="media/img/react.jpg" alt="react"/>
          </div>

          <div className="col-lg-9">
            <h1>React JS</h1>
            <p>WebFlavor uses React JS as its Front End UI framework. This allows for component driven code which creates more efficient code. Almost all aspects of the demo course is made from a component. The Navigation, Footer, and Content components comprise of other components such as interactives, and buttons.</p>

            <p>React JS elimintates the need for JQuery and removes direct DOM manipulation.</p>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-lg-9">
            <h1>Redux</h1>
            <p>Alongside React, WebFlavor utilizes Redux, the javascript library for state composition and management. The settings, and state of the individual components are stored and changed with Redux. This allows a developer to update components easily with React's component code.</p>
          </div>

          <div className="col-lg-3">
            <img src="media/img/redux.jpg" alt="grunt"/>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-lg-3">
            <img src="media/img/webpack.jpg" alt="react"/>
          </div>

          <div className="col-lg-9">
            <h1>Webpack</h1>
            <p>Since React components are not browser-ready out of the box, and since ES6 is frequently used, the code needs to be compiled to ES5 javascript. Create React App is a creation of Facebook(React) which has an automatic setup for these configuration files. Create React App makes use of webpack for their module bundling needs.</p>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-lg-8">
            <h1>SASS Integration</h1>
            <p>Furthermore, WebFlavor makes use of SASS as a CSS styling preprocessor. With SASS, the use of variables, functions, mixins, and more allow for a developer to style the Course at a much more rapid pace. Changing just a few variables can help reskin the entire course in several seconds rather than pacing through line by line.</p>

            <p>A developer doesn't have to know the keys to SASS either, since SASS is backwards compatible with normal CSS.</p>
          </div>

          <div className="col-lg-4">
            <img src="media/img/sass.jpg" alt="grunt"/>
          </div>
        </div>

        <div className="row margin-below">
          <div className="col-lg-3">
            <img src="media/img/grunt.jpg" alt="grunt"/>
          </div>

          <div className="col-lg-9">
            <h1>Scorm Build Automization</h1>
            <p>Using Grunt as a task runner, WebFlavor elimintates the need for a developer to have to manually change scorm files his/herself. Grunt tasks now take over the process, and change/update the appropriate fields within scorm/ims files so that they are ready for LMS integration</p>
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
