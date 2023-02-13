import React from 'react';
import "./section.css";

const section = (props) => {
  const overrideClass = props.className != null ? ` ${props.className}` : '';
  const darkModeClass = props.darkMode === true ? ' is-dark-mode' : '';
  return (
    <div className={ `ml-section${overrideClass}${darkModeClass}` }>
      { props.children }
    </div>
  );
}

export default section;