import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';

export const TextField = (props) => {
  const { className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-textfield', className, darkMode);

  return (
    <div
      className={`${baseClass}`}
      {...events}
    >
    </div>
  );
};
