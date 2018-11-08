# WebFlavor 3.0 Course Template
[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Author: Jordan Farris
Last modified: 11/08/2018

WebFlavor is a development framework for creating responsive HTML5 courses. WebFlavor 3.0, the latest version, is built with React/Redux for frontend UI and state management. The technologies and tools needed to be able to use WebFlavor will be discussed along with their role in this documentation.

## Install
The following technologies will need to be installed globally to your system to be able to develop
* Node
* Grunt
* SASS/Ruby

After downloading or cloning the project from GitHub, ```npm install``` from the command line. After everything is installed, before starting development, the specific course needs to be initialized [if enhancing the framework, or not for LMS integration for a client, the following first step can be ignored].

- First, access src/settings.json and set the course Title and SubTitle to the appropriate values, the run ```grunt init```.
- Then to start up the development environment run ```npm start```.
- Finally, after development, to build the project for production, run ```npm build```.




## Technology
In order to develop with WebFlavor, enhance the framework, and add features, the developer must have adequate knowledge about React, Redux, Bootstrap grid, and how extra tools (create-react-app, reactstrap) work along side these techs. The following is a basic overview of why each technology is used and its overall purpose.

* [ReactJS](https://reactjs.org/) - HTML enhanced for web apps!
* [Redux](https://redux.js.org/) - awesome web-based text editor
* [Bootstrap](https://getbootstrap.com/) - Markdown parser done right. Fast and easy to extend.
* [SCSS](https://sass-lang.com/) - great UI boilerplate for modern web apps
* [Grunt](https://gruntjs.com/) - evented I/O for the backend
* [Create React App](https://github.com/facebook/create-react-app) - fast node.js network app framework [@tjholowaychuk]
* [ReactStrap](https://reactstrap.github.io/components/navbar/#NavbarToggler) - the streaming build system

#### React

React is a JavaScript framework used in component driven code for frontend user interfaces. WebFlavor has many repeating components [Flip Cards, Hotspots, Menus, Buttons, Navigation, etc]. React allows the developer to use components to remove excessively repeated code. Understanding React is critical for enhancing the framework itself. Nevertheless, if a content developer wants to edit the content of the course with a prebuild style, then they can manage without much knowledge.

#### Redux

Redux is a JavaScript library allowing a predictable state container for JavaScript apps. Used in conjunction with React, it allows for one main store/state to be used for the overall structure of the app, while smaller components have their own individual state that don't affect the rest of the apps state.

#### Bootstrap

Bootstrap is a CSS library that is used mainly for its grid. The app itself utilizes the bootstrap grid, nav, and dropdown classes the most. Outside of the grid, many of the css in the application is custom, and easily changed depending on the client's needs and wants.

#### Create React App

Create React App is a Facebook developed tool that allows for React apps to be developed with prebuilt configuration. It gives developers a development environment, and build tools to configure the application. This is what compiles the React code into JavaScript that browsers can read. It's build tools have cache-busting and module bundling via WebPack.

#### Reactstrap

Reactstrap is a JavaScript library that allows for bootstrap to be used in React components. Bootstrap classes can be used manually by a developer, however, because the interactive aspects of Bootstrap use jQuery [and because React replaces jQuery], they can't be used. Reactstrap allows for Bootstrap components to be used and have interaction within React, such as dropdowns, navigation, and more.

#### Grunt

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
