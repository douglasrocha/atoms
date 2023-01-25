import * as React from 'react';
import { useState } from 'react';
import { Label } from '../Label/Label';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';
import { ParentBaseProps } from '../../base/ParentBaseProps';

export interface DropDownMenuProps extends ParentBaseProps {
  className?: string;
  darkMode?: boolean;
  label?: string;
  open?: boolean;
  style?: React.CSSProperties;
}

export const DropDownMenu = (props: DropDownMenuProps) => {
  const { children, className, darkMode, label, open, style } = props;
  const [isOpen, setIsOpen] = useState(false);
  const defaultClickEvent: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const extractedEvents = extractEvents(props);
  const events = Object.assign(
    {},
    {
      ...extractedEvents,
      onClick: props.onClick ?? defaultClickEvent,
    }
  );

  const openStatus = open || isOpen;
  const baseClass = getClassName('at-dropdownmenu', className, darkMode);
  const openClass = openStatus ? ' is-open' : '';

  return (
    <div
      className={`${baseClass}${openClass}`}
      style={getBaseStyle(style)}
      {...events}
    >
      <Label className="label" label={label} />
      <div className="items">{children}</div>
    </div>
  );
};
