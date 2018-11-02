import React from "react";

const NavigationItem = (props) => {
  var selected;
  if(props.selected){
    selected = "courseTitleChapterSelected";
  }
  return (
    <li className={`courseTitleChapter ${selected}`} id="courseTitleChapter0" onClick={() => props.openPage(props.index)}>
      <p className="nav-link">{props.title}</p>
    </li>
  );
}



export default NavigationItem;
