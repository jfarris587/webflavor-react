import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavigationLinks from '../components/NavigationLinks';
import NavigationItem from '../components/NavigationItem';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav} from 'reactstrap';

export class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    var tempState = {...this.state};
    tempState.isOpen = !tempState.isOpen;
    this.setState(tempState);
  }

  render(){
    return (
      <div className="nav-container">
        <Navbar color="light" dark expand="md">
          <div className="nav-header container">

            <div className="title">
              <NavbarToggler onClick={this.toggle} />

              <span className="titleMain">{this.props.TITLE}: </span>
              <span className="titleSub">{this.props.SUB_TITLE}</span>
            </div>

            <NavigationLinks
              hasGlossary={this.props.hasGlossary}
              hasHelp={this.props.hasHelp}
              hasResources={this.props.hasResources}
              dispatch={this.props.dispatch}
            />
          </div>

          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>

              {this.props.chapters.map((chapter, index) =>{
                let selected = false;
                if(this.props.currentChapter === index){
                  selected = true;
                }
                return (
                  <NavigationItem
                    key={index}
                    c={index}
                    chapter={chapter}
                    openPage={this.props.openPage}
                    selected={selected}
                  />
              );
              })}
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    TITLE: state.settings.TITLE,
    SUB_TITLE: state.settings.SUB_TITLE,
    chapters: state.chapters,
    currentPage: state.tracking.currentPage,
    currentChapter: state.tracking.currentChapter,
    hasGlossary: state.settings.HAS_GLOSSARY,
    hasResources: state.settings.HAS_RESOURCES,
    hasHelp: state.settings.HAS_HELP,
  }
}

export default connect(
  mapStateToProps
)(Navigation);
