import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';

export const Dialog = (props) => {
  const { className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-dialog', className, darkMode);

  return (
    <div
      className={`${baseClass}`}
      {...events}
    >
    </div>
  );
};
