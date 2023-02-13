import React from 'react';
import "./section.css";

export default (props) => {
  return (
    <div className={ `ml-section${props.className != null ? ` ${props.className}` : ''}${props.darkMode === true ? ' is-dark-mode' : ''}` }>
      { props.children }
    </div>
  );
}