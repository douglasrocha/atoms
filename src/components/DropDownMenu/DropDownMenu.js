import React, { useState } from 'react';
import Label from '../Label/Label';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './dropDownMenu.scss';

export default function (props) {
    const { children, className, darkMode, label, open, style } = props;

    const [ isOpen, setIsOpen ] = useState(false);
    const defaultClickEvent = (e) => {
        e.preventDefault();
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
            My Drop Down Menu
          </Label>
          <div className="items">
            { children }
          </div>
        </div>
    );
}
