import * as React from 'react';
import { useState } from 'react';
import { Label } from '../Label/Label';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './dropDownMenu.css';
import { BaseProps } from '../../base/BaseProps';

interface DropDownMenuProps extends BaseProps  {
  children?: React.ReactElement,
  className?: string,
  darkMode?: boolean,
  label?: string,
  open?: boolean,
  style?: React.CSSProperties
}

export const DropDownMenu = (props: DropDownMenuProps): React.ReactElement => {
    const { children, className, darkMode, label, open, style } = props;

    const [ isOpen, setIsOpen ] = useState(false);
    const defaultClickEvent: React.MouseEventHandler = 
      (e: React.MouseEvent) => {
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
