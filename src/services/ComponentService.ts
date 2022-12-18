import BaseTheme from '../themes/BaseTheme';
import { pick } from 'lodash';
import * as React from 'react';
import { allEvents } from '../base/BaseEvents';

export const getClassName = (
  baseClass: string,
  className?: string,
  isDarkMode?: boolean
) => {
  const darkModeClass = isDarkMode ? ' is-dark-mode' : '';
  const overrideClass = className ? ` ${className}` : '';
  return `${baseClass}${darkModeClass}${overrideClass}`;
};

export const getBaseStyle = (
  overrides?: React.CSSProperties
): React.CSSProperties => Object.assign({}, BaseTheme, overrides);

export const extractEvents = (props: object) => pick(props, allEvents);
