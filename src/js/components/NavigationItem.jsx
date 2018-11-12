import React, { Component } from 'react';
import {
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export class NavigationItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle = () => {
    var tempState = {...this.state};
    tempState.dropdownOpen = !tempState.dropdownOpen;
    this.setState(tempState);
  }


  render(){
    var selected = "";
    if(this.props.selected){
      selected = "courseTitleChapterSelected";
    }

    if(this.props.chapter.length === 1){
      return (
        <NavItem className={selected} onClick={()=>this.props.openPage(this.props.c, 0)}>
          <NavLink>
            {this.props.chapter[0].state.TITLE}
          </NavLink>
        </NavItem>

      );
    }
    else{
      return (
        <NavItem className={selected} onClick={this.toggle}>
          <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle>{this.props.chapter[0].state.CHAPTER_TITLE}</DropdownToggle>

            <DropdownMenu>
              {this.props.chapter.map((chapter, p) =>(
                <DropdownItem key={p} onClick={()=>this.props.openPage(this.props.c, p)}>{chapter.state.TITLE}</DropdownItem>
              ))}
            </DropdownMenu>
          </Dropdown>
        </NavItem>
      );
    }
  }
}

export default NavigationItem;
