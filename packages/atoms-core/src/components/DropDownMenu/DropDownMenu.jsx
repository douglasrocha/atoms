import * as React from 'react';
import { useState } from 'react';
import { Label } from '../../index';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';

export default (props) => {
  const { children, className, darkMode, label, open, style } = props;
  const [isOpen, setIsOpen] = useState(false);
  const defaultClickEvent = (e) => {
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
