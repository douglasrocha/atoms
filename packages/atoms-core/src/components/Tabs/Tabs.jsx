import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';

export default (props) => {
  const { className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-tabs', className, darkMode);

  return (
    <div
      className={`${baseClass}`}
      {...events}
    >
    </div>
  );
};
