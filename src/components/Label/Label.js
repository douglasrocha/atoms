import React from 'react';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './label.css';

export default (props) => {
    const { children, className, darkMode, style } = props;
    const events = extractEvents(props);

    return (
        <label
          className={ getClassName('at-label', className, darkMode) }
          style={ getBaseStyle(style) }
          { ...events }>
          { children }
        </label>
    );
}
