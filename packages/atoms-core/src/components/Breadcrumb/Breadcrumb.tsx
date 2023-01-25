import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';
import { ParentBaseProps } from '../../base/ParentBaseProps';

export interface BreadcrumbProps extends ParentBaseProps {
  
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { children, className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-breadcrumb', className, darkMode);

  return (
    <div
      className={`${baseClass}`}
      {...events}
    >
      { children }
    </div>
  );
};
