import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';
import { BaseProps } from '../../base/BaseProps';

export interface PaginationProps extends BaseProps {
  
}

export const Pagination = (props: PaginationProps) => {
  const { className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-pagination', className, darkMode);

  return (
    <div
      className={`${baseClass}`}
      {...events}
    >
    </div>
  );
};
