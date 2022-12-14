import React from 'react';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './paragraph.css';

export default (props) => {
    const { children, className, darkMode, style } = props;
    const events = extractEvents(props);

    return (
        <p
          className={ getClassName('at-paragraph', className, darkMode) }
          style={ getBaseStyle(style) }
          { ...events }>
          { children }
        </p>
    );
}
