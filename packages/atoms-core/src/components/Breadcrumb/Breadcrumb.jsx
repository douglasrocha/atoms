import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';

export const Breadcrumb = (props) => {
  const { children, className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-breadcrumb', className, darkMode);

  return (
    <div
      className={`${baseClass}`}
      {...events}
    >
      { children }
    </div>
  );
};
