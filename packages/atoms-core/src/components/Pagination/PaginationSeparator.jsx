import * as React from 'react';
import { extractEvents, getClassName } from '../../services/ComponentService';

export const PaginationSeparator = (props) => {
  const { className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('separator', className, darkMode);

  return (
    <span 
      className={ className ?? baseClass }
      {...events}>
      ...
    </span>
  );
}