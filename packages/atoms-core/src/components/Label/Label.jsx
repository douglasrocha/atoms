import * as React from 'react';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';

export const Label = (props) => {
  const { label, className, darkMode, style } = props;
  const events = extractEvents(props);

  return (
    <label
      className={getClassName('at-label', className, darkMode)}
      style={getBaseStyle(style)}
      {...events}
    >
      {label}
    </label>
  );
};
