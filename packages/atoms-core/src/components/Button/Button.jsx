import * as React from 'react';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';

export default (props) => {
  const { className, darkMode, label, style } = props;
  const events = extractEvents(props);

  return (
    <button
      className={getClassName('at-button', className, darkMode)}
      style={getBaseStyle(style)}
      {...events}
    >
      {label}
    </button>
  );
};