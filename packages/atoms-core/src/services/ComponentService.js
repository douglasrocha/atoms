import BaseTheme from '../themes/BaseTheme';
import { pick } from 'lodash';
import * as React from 'react';
import { allEvents } from '../base/BaseEvents';

export const getClassName = (
  baseClass,
  className,
  isDarkMode
) => {
  const darkModeClass = isDarkMode ? ' is-dark-mode' : '';
  const overrideClass = className ? ` ${className}` : '';
  return `${baseClass}${darkModeClass}${overrideClass}`;
};

export const getBaseStyle = (overrides) => 
    Object.assign({}, BaseTheme, overrides);

export const extractEvents = (props) => 
    pick(props, allEvents);
