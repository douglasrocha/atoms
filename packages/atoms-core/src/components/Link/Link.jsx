import * as React from 'react';
import * as Router from 'react-router-dom';
import { isExternal } from '../../services/UrlService';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';

export const Link = (props) => {
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
