import React from "react";

const DropDown = (props) => {
  return (
    <li onClick={() => props.openPage(props.c, props.p)}>
      <p>{props.page.title}</p>
    </li>
  );
}

export default DropDown;
