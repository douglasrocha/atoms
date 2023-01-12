import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';
import { BaseProps } from '../../base/BaseProps';

export interface DialogProps extends BaseProps {
  
}

export const Dialog = (props: DialogProps) => {
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
