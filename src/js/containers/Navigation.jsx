import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

import NavigationLinks from '../components/NavigationLinks';
import NavigationItem from '../components/NavigationItem';

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
      <div id="navContainer">
        <Navbar color="light" light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
              <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>

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
