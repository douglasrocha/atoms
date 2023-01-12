import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';
import { BaseProps } from '../../base/BaseProps';

export interface BreadcrumbProps extends BaseProps {
  
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-breadcrumb', className, darkMode);

  return (
    <div
      className={`${baseClass}`}
      {...events}
    >
    </div>
  );
};
