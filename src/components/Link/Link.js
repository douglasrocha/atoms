import React from 'react';
import { Link } from 'react-router-dom';
import { isExternal } from '../../utils/UrlUtils';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './link.scss';

export default (props) => {
    const { children, className, darkMode, style, target, to } = props;
    const events = extractEvents(props);
    const attributes = {
        className: getClassName('at-link', className, darkMode),
        style: getBaseStyle(style),
        children,
        target,
        ...events
    };

    return isExternal(to)
        ? <a href={ to } { ...attributes } /> 
        : <Link to={ to } {...attributes} />;
}
