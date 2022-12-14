import React from 'react';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './button.css';

export default (props) => {
    const { className, darkMode, label, style } = props;
    const events = extractEvents(props);

    return (
        <button
          className={ getClassName('at-button', className, darkMode) }
          style={ getBaseStyle(style) }
          { ...events }>
          { label }
        </button>
    );
}
