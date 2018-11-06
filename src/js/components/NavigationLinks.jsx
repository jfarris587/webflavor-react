import React from "react";

const NavigationLinks = (props) => {
  return (
      <ul className="headerLinks nav page-assist float-right">

        {props.hasResources && (
          <li>
            <a className="btnResources" onClick={props.openModal}>
              <img style={{height: "50px", width: "auto"}} src="media/assets/resources.png" alt="resources"/>
            </a>
          </li>
        )}

        {props.hasGlossary && (
          <li>
            <a className="btnGlossary">
              <img style={{height: "50px", width: "auto"}} src="media/assets/glossary.png" alt="glossary"/>
            </a>
          </li>
        )}

        {props.hasHelp && (
          <li>
            <a className="btnHelpModal">
              <img style={{height: "50px", width: "auto"}} src="media/assets/help.png" alt="help"/>
            </a>
          </li>
        )}

      </ul>
  );
}

export default NavigationLinks;
