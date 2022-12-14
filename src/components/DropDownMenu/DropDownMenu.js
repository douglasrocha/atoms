import React, { useState } from 'react';
import Label from '../Label/Label';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './dropDownMenu.css';

export default function (props) {
    const { children, className, darkMode, label, open, style } = props;

    const [ isOpen, setIsOpen ] = useState(false);
    const defaultClickEvent = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsOpen(!isOpen);
    };
    
    const extractedEvents = extractEvents(props);
    const events = Object.assign({}, {
        ...extractedEvents,
        onClick: props.onClick || defaultClickEvent
    });

    const openStatus = open || isOpen;
    const baseClass = getClassName('at-dropdownmenu', className, darkMode);
    const openClass = openStatus ? ' is-open' : '';
    
    return (
        <div
          className={ `${baseClass}${openClass}` }
          style={ getBaseStyle(style) }
          { ...events }>
          <Label className="label">
            { label }
          </Label>
          <div className="items">
            { children }
          </div>
        </div>
    );
}
