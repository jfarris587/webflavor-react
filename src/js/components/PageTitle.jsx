import React from "react";

const NavigationLinks = (props) => {
  var width = 12;
  var pageNums = true;

  if(props.pageNum === props.pageTotal){
    width = 6;
    pageNums = false;
  }

  return (
    <div className="row">
      <div className={`col-sm-${width}`}>
        <h1 id="pageTitle">{props.title}</h1>

        {pageNums && (
          <div className="page-number">
            <span>{props.pageNum}</span> of <span>{props.pageTotal}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavigationLinks;
