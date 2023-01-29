import * as React from 'react';
import { extractEvents } from '../../services/ComponentService';

export const PaginationButton = (props) => {
  const { className, darkMode, isSelected } = props;
  const events = extractEvents(props);
  const finalClassName = isSelected === true
    ? `${className} is-selected` 
    : `${className}`;

  return (
    <span 
      className={ finalClassName }
      {...events}>
      { props.value }
    </span>
  );
}

export const getSiblingNavigationClassName = (className, isEnabled) =>
    `${className} ${isEnabled ? '' : 'is-disabled'}`

export const getEndsNavigationClassName = (className, isVisible, isEnabled) =>
    `${className} ${isEnabled ? '' : 'is-disabled'} ${isVisible ? '' : 'is-invisible'}`