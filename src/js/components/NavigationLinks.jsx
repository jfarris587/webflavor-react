import React from "react";

const NavigationLinks = (props) => {
  return (
      <ul className="headerLinks">

        {props.hasResources && (
          <li>
            <a className="btnResources" onClick={() => props.dispatch({
              type: "TOGGLE_MODAL",
              payload: "resources"
            })}>
              <img style={{height: "50px", width: "auto"}} src="media/assets/resources.png" alt="resources"/>
            </a>
          </li>
        )}

        {props.hasGlossary && (
          <li>
            <a className="btnGlossary" onClick={() => props.dispatch({
              type: "TOGGLE_MODAL",
              payload: "glossary"
            })}>
              <img style={{height: "50px", width: "auto"}} src="media/assets/glossary.png" alt="glossary"/>
            </a>
          </li>
        )}

        {props.hasHelp && (
          <li>
            <a className="btnHelpModal" onClick={() => props.dispatch({
              type: "TOGGLE_MODAL",
              payload: "help"
            })}>
              <img style={{height: "50px", width: "auto"}} src="media/assets/help.png" alt="help"/>
            </a>
          </li>
        )}
      </ul>
  );
}

export default NavigationLinks;
