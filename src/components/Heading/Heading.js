import React from 'react';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './heading.scss';

export default (props) => {
    const { children, className, darkMode, style, w } = props;
    const events = extractEvents(props);
    const attributes = {
        className: getClassName('at-heading', className, darkMode),
        style: getBaseStyle(style),
        children,
        ...events
    };
    
    switch (w) {
        case 6: return <h6 { ...attributes } />;
        case 5: return <h5 { ...attributes } />;
        case 4: return <h4 { ...attributes } />;
        case 3: return <h3 { ...attributes } />;
        case 2: return <h2 { ...attributes } />;
        default: return <h1 { ...attributes } />;
    }
}
