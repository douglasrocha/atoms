import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';

export const Slider = (props) => {
  const { className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-slider', className, darkMode);

  return (
    <div
      className={`${baseClass}`}
      {...events}
    >
    </div>
  );
};
