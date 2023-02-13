import * as React from 'react';
import * as Router from 'react-router-dom';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';

export default (props) => {
  const { children, className, darkMode, isExternal, style, target, to } =
    props;
  const events = extractEvents(props);
  const attributes = {
    className: getClassName('at-link', className, darkMode),
    style: getBaseStyle(style),
    children,
    target,
    ...events,
  };

  return isExternal === true ? (
    <a href={to} {...attributes} />
  ) : (
    <Router.Link to={to ?? '#'} {...attributes} />
  );
};
