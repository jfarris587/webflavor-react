# WebFlavor 3.0 Course Template
![N|Solid](https://i.imgur.com/K6NuvXA.png)

![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)

**Jordan Farris**
Last modified: 11/08/2018

WebFlavor is a development framework for creating responsive HTML5 courses. WebFlavor 3.0, the latest version, is built with React/Redux for frontend UI and state management. The technologies and tools needed to be able to use WebFlavor will be discussed along with their role in this documentation.

## Install and Deploy
The following technologies will need to be installed globally to your system to be able to develop and deploy
* Node
* Grunt
* SASS/Ruby
* Git

After downloading or cloning the project from GitHub, ```npm install``` from the command line. After everything is installed, the specific course needs to be initialized [if enhancing the framework, or not for LMS integration for a client, the following first step can be ignored].

- First, access src/settings.json and set the course Title and SubTitle to the appropriate values, the run ```grunt init```.
- Then to start up the development environment run ```npm start```.
- Finally, after development, to build the project for production, run ```npm run build```.

In order to deploy an enhanced version of the framework back to GitHub, merge commits to master branch. Then, run ```npm run deploy``` from the command line. This will deploy the production build to a github-pages branch, which GitHub will server at the following link:

https://jordanfarris.github.io/webflavor-react/


## Technology
In order to develop with WebFlavor, enhance the framework, and add features, the developer must have adequate knowledge about React, Redux, Bootstrap grid, and how extra tools (create-react-app, reactstrap) work along side these techs. The following is a basic overview of why each technology is used and its overall purpose.

* [ReactJS](https://reactjs.org/) - JavaScript UI Framework
* [Redux](https://redux.js.org/) - State Management Library
* [Bootstrap](https://getbootstrap.com/) - CSS Class Library
* [SCSS](https://sass-lang.com/) - CSS Preprocessor
* [Grunt](https://gruntjs.com/) - JavaScript Task Runner
* [Create React App](https://github.com/facebook/create-react-app) - React App Configuration Build [@tjholowaychuk]
* [ReactStrap](https://reactstrap.github.io/components/navbar/#NavbarToggler) - Bootstrap/React Library

### React

React is a JavaScript framework used in component driven code for frontend user interfaces. WebFlavor has many repeating components [Flip Cards, Hotspots, Menus, Buttons, Navigation, etc]. React allows the developer to use components to remove excessively repeated code. Understanding React is critical for enhancing the framework itself. Nevertheless, if a content developer wants to edit the content of the course with a prebuild style, then they can manage without much knowledge.

### Redux

Redux is a JavaScript library allowing a predictable state container for JavaScript apps. Used in conjunction with React, it allows for one main store/state to be used for the overall structure of the app, while smaller components have their own individual state that don't affect the rest of the apps state.

### Bootstrap

Bootstrap is a CSS library that is used mainly for its grid. The app itself utilizes the bootstrap grid, nav, and dropdown classes the most. Outside of the grid, many of the css in the application is custom, and easily changed depending on the client's needs and wants.

### Create React App

Create React App is a Facebook developed tool that allows for React apps to be developed with prebuilt configuration. It gives developers a development environment, and build tools to configure the application. This is what compiles the React code into JavaScript that browsers can read. It's build tools have cache-busting and module bundling via WebPack.

### Reactstrap

Reactstrap is a JavaScript library that allows for bootstrap to be used in React components. Bootstrap classes can be used manually by a developer, however, because the interactive aspects of Bootstrap use jQuery [and because React replaces jQuery], they can't be used. Reactstrap allows for Bootstrap components to be used and have interaction within React, such as dropdowns, navigation, and more.

### Grunt

Grunt is a task runner which is used specifically for project initialization in WebFlavor. For the framework to work properly on an LMS, certain scorm files need to be edited. This is taken completely out of the hands with Grunt task runner. *[Future developer may want to pursue moving the grunt initialization tasks to webpack which comes with create-react-app]*

## Application Architecture

Understanding how the application architecture is layed out is vital for being able to quickly develop with WebFlavor. The first level directories are determined by create-react-app, they are the following:
```
webflavor
+---build
+---config
+---public
+---scripts
+---src
```

**build:** The build directory is where the production files go after the app is run through the production enviornment.

**config:** The config directory is the configuration for webpack, which is what create-react-app uses to build the app, compile, minify, etc. These files are rarely if ever touched.

**scripts:** The scripts directory is another create-react-app directory that is rarely touched, it is responsible for the npm scripts to run and build the project.

**public:** The public directory is the "non-compiled" or "non-source" code for the project. No JavaScript code, or scss is done here. The scorm files, media, and html exists here. A developer only needs to be concerned about putting their media files in the folder when developing a course.

**src:** The src directory is the main directory that developer is concerned about. It is where all the development occurs, react/redux/js as well as scss files.

#### Development Architecture

The development architecture [directories within src] are the most important note from this section. Understanding this will help understand how WebFlavor itself is organized. The following is the directory layout of the src folder.

```
src
+---api
¦
¦
+---content
¦   +---pages
¦   ¦   +---1_1.jsx
¦   ¦   +---2_1.jsx
¦   ¦   +---3_1.jsx
¦   ¦
¦   +---Glossary.jsx
¦   +---Resources.jsx
¦   +---Splash.jsx
¦
¦
+---js
¦   +---components
¦   +---containers
¦   +---interactives
¦   +---index.js
¦   
¦
+---redux
¦   +---reducers
¦   +---store
¦
¦
+---scss
¦   +---base
¦   +---components
¦   +---font
¦   +---interactives
¦   +---layout
¦   +---vendors
¦   +---style.scss
```

The architecture is fairly self-explanatory without getting into the code.

**api:** The api directory holds the three files for scorm integration. These are rarely touched by developers.

**content:** The content directory is where development of courses takes place. It holds the jsx files which export the content in JSON form. These files are the individual pages, the resources/glossary/splash files, and the contents file.


**js:** The js directory is central folder for the entire application. It is responsible for starting the app, setting the state, changing it, and source for how the app works.

**redux:** The redux directory is responsible for the overall state of the app, it contains the reducers, and the store.

**scss:** The scss directory is the scss for the app. Within the directory variables can be changed to change the theme. If WebFlavor is to be customized for a specific style, this is done here.


## JS Architecture

The following section explains more in detail the architecture and code of the JS directory. This directory is the key foundation of the app, responsible for loading the state, and rendering the UI. It is broken into three other directories.

```
+---js
¦   +---components
¦   +---containers
¦   +---interactives
```

The **components and containers** directory follows the React code-pattern of functional vs container components or state vs stateless components. The **containers** are the main overall pieces of the app: navigation, footer, content, etc. While the **components** are smaller repeating elements that are used in each one. For example, the Navigation elements are components inside the Navigation container.

The **interactives** directory is home to all the interactive classes which represent the interactive components: hotspots, flipcards, ctr, etc.

**The most important container is the App container**, which is the parent. In addition, its React Lifecycle methods start the app by pulling the data from the content directory, initializing the redux state, and proceeding to render everything once completed.

## Content Architecture

The next important directory to understand is the content directory, which is where the courses content lives. I previous iterations of WebFlavor, XML was used, however, now exported JSON objects in JSX files are used.

### Pages

Below is an example of one page's code. Imported is React, which should always be the case, along with { connect } and PageTitle. But the Hotspot is also imported since it is used on this particular page. Each page is technically a class-based component. Each page has its own "state" which contains the title, chapter title, and any interactive data to be used.

**NOTE:** *The state is a variable outside of the class, therefore, it is technically not a conventional "state" of the component like a normal React class. In this case, it is simply a variable object that is used. This is because the state and the component itself must be exported separately, which is why the state exists outside the class. The reason why they need to be separate, is because the Navigation needs to know the chapter titles. And then the page renders the Page component class*

To add interactive components, after importing it, you will need to set its data inside the state object. You can see the ```<Hotspot />``` component is added wherever desired in the layout. In addition, it needs its specific data passed as a prop via the hotspot prop. The prop name is 'hotspot' and we pass it the corresponding data from our state by doing: ```hotspot={state.hotspot_1}```

Every interactive has a predefined object for the data, and can be seen on the demo pages. To appropriately render the interactive, it must maintain that structure. In conclusion, this is what the page jsx file looks like. All the variables you set, then are exported as a JSON object.

```
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
      </ul>,

      <ul>
        <li>Vix debitis lucilius ut, quo id porro timeam honestatis.</li>
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

        <div className="row margin-below">
          <div className="col-lg-3">
            <Hotspot
              hotspot={state.hotspot_1}
            />
          </div>

          <div className="col-lg-9">
            <h1>React JS</h1>
            <p>React JS elimintates the need for JQuery and removes direct DOM manipulation.</p>
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
```


## Redux Architecture
The next fundamental block is Redux and its role in WebFlavor. As discussed, it is a state container that holds the overall state [settings] of the app. Any changes to the state go through Redux. After learning redux, you will see the concept of **Reducers**. WebFlavor is broken up into several reducers:

- **settings** - Main settings of the app set in settings.json
- **chapters** - The Array of Chapters containing page data
- **glossary** - Glossary data
- **resources** - Resources data
- **splash** - Splash page data
- **tracking** - Tracking which page is the current page

Most of the reducers are set at the beginning of the app being started, and don't change much afterwards (but are still used throughout different components of the app). Only the tracking reducer changes significantly since it holds the currentPage and currentChapter variables.

Each reducer has actions that when received, change its state accordingly. To trigger these state changes, actions need to be dispatched vi:

```
this.props.dispatch({
  type: "SET_SPLASH",
  payload: Splash
});
```

The initial app state is show in the console.log at the start of the course. If the developer wishes to see it on every state change, they can console.log() the state from index.js within the subscribe method.

### Persisting State

In order to have the state persist through reloads and on browser closes, the application implements Redux Persist, which is a library for using localStorage in the background to persist the data. All data within the Redux state will be persisted, however, data that lies in component states, will not be persisted.

Therefore, if a button is clicked and has its state changed to "color: blue" then on the refresh it will go back to its default color. This is because that buttons state was not from the Redux state. Any and all data that is critical for the application as a whole should be contained within the Redux state. For example, to try this, the state of the modal is contained within the Redux state, if you open the glossary, then refresh, it will still be open.
