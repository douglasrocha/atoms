import * as React from 'react';
import { BaseProps } from '../../base/BaseProps';
import { extractEvents, getClassName } from '../../services/ComponentService';

export interface PaginationButtonProps extends BaseProps{
  value?: JSX.Element | React.ReactNode;
  isSelected?: boolean;
}

export const PaginationButton = (props: PaginationButtonProps) => {
  const { className, darkMode } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('pagination-button', className, darkMode);

  return (
    <span 
      className={ className ?? baseClass }
      {...events}>
      { props.value }
    </span>
  );
}

export const getPageNavigationClassName = 
  (className: string, isEnabled: boolean, isSelected: boolean): string =>
    `${className} ${isEnabled ? '' : 'is-disabled'} ${isSelected ? 'is-selected' : ''}`

export const getSiblingNavigationClassName = 
  (className: string, isEnabled: boolean): string =>
    `${className} ${isEnabled ? '' : 'is-disabled'}`

export const getEndsNavigationClassName = 
  (className: string, isVisible: boolean, isEnabled: boolean): string =>
    `${className} ${isEnabled ? '' : 'is-disabled'} ${isVisible ? '' : 'is-invisible'}`