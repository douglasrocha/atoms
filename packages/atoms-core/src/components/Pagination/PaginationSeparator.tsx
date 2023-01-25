import * as React from 'react';

import { BaseProps } from '../../base/BaseProps';
import { extractEvents, getClassName } from '../../services/ComponentService';

export interface PaginationSeparatorProps extends BaseProps{
}

export const PaginationSeparator = (props: PaginationSeparatorProps) => {
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