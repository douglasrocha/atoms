import React from 'react';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './card.scss';

export default (props) => {
    const { children, className, darkMode, style } = props;
    const events = extractEvents(props);

    return (
        <div
          className={ getClassName('at-card', className, darkMode) }
          style={ getBaseStyle(style) }
          { ...events }>
          { children }
        </div>
    );
}
