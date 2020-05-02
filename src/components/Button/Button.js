import React from 'react';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './button.scss';

export default (props) => {
    const { className, darkMode, label } = props;
    const events = extractEvents(props);

    return (
        <button
          className={ getClassName('at-button', className, darkMode) }
          style={ getBaseStyle() }
          { ...events }>
          { label }
        </button>
    );
}
