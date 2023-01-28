import * as React from 'react';
import { extractEvents, getClassName } from '../../services/ComponentService';

export const PaginationButton = (props) => {
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

export const getPageNavigationClassName = (className, isEnabled, isSelected) =>
    `${className} ${isEnabled ? '' : 'is-disabled'} ${isSelected ? 'is-selected' : ''}`

export const getSiblingNavigationClassName = (className, isEnabled) =>
    `${className} ${isEnabled ? '' : 'is-disabled'}`

export const getEndsNavigationClassName = (className, isVisible, isEnabled) =>
    `${className} ${isEnabled ? '' : 'is-disabled'} ${isVisible ? '' : 'is-invisible'}`