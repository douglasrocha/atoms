import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';

export const TextArea = (props) => {
  const { className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-textarea', className, darkMode);

  return (
    <div
      className={`${baseClass}`}
      {...events}
    >
    </div>
  );
};
