import React from 'react';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './dropDownMenuItem.scss';

export default (props) => {
    const { children, className, darkMode, style } = props;

    const onClick = props.onClick || (() => {});
    const onClickWrapper = (e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
    };

    const extractedEvents = extractEvents(props);
    const events = Object.assign({}, {
        ...extractedEvents,
        onClick: onClickWrapper
    });

    return (
        <span
          className={ getClassName('at-dropdownmenuitem', className, darkMode) }
          style={ getBaseStyle(style) }
          { ...events }>
          { children }
        </span>
    );
}
