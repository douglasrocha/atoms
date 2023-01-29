import * as React from 'react';
import {
  extractEvents,
  getClassName,
  getBaseStyle
} from '../../services/ComponentService';

export default (props) => {
  const { children, className, darkMode, style } = props;
  const events = extractEvents(props);

  return (
    <div
      className={ getClassName('at-card', className, darkMode) }
      style={ getBaseStyle(style) }
      { ...events }>
      { children }
    </div>
  );
};
