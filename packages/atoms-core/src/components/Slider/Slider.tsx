import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';
import { BaseProps } from '../../base/BaseProps';

export interface SliderProps extends BaseProps {
  
}

export const Slider = (props: SliderProps) => {
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
