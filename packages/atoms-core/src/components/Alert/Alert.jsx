import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';

//type Severity = 'error' | 'warning' | 'info' | 'success'

export const Alert = (props) => {
  const { children, className, darkMode, severity, title } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-alert', className, darkMode);

  return (
    <div
      className={`${baseClass} is-${severity}`}
      {...events}
    >
      <div className="titlebar">
        { title }
      </div>
      <div className="content">
        { children }
      </div>
    </div>
  );
};
