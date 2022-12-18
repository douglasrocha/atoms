import * as React from 'react';
import * as Router from 'react-router-dom';
import { isExternal } from '../../services/UrlService';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';
import './link.css';
import { BaseProps } from '../../base/BaseProps';

export interface LinkProps extends BaseProps {
  children?: string;
  forceExternal?: boolean;
  target?: string;
  to?: string;
}

export const Link = (props: LinkProps) => {
  const { children, className, darkMode, forceExternal, style, target, to } =
    props;
  const events = extractEvents(props);
  const attributes = {
    className: getClassName('at-link', className, darkMode),
    style: getBaseStyle(style),
    children,
    target,
    ...events,
  };

  return forceExternal === true || isExternal(to ?? '') ? (
    <a href={to} {...attributes} />
  ) : (
    <Router.Link to={to ?? ''} {...attributes} />
  );
};
