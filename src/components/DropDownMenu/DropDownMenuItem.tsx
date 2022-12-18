import * as React from 'react';
import { BaseProps } from '../../base/BaseProps';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';
import { Label } from '../Label/Label';
import './dropDownMenuItem.css';

export interface DropDownMenuItemProps extends BaseProps {
  className?: string;
  darkMode?: boolean;
  label?: string;
  labelClassName?: string;
  style?: React.CSSProperties;
}

export const DropDownMenuItem = (props: DropDownMenuItemProps) => {
  const { label, className, labelClassName, darkMode, style } = props;

  const onClickWrapper: React.MouseEventHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (props.onClick != null) {
      props.onClick(e);
    }
  };

  const extractedEvents = extractEvents(props);
  const events = Object.assign(
    {},
    {
      ...extractedEvents,
      onClick: onClickWrapper,
    }
  );

  return (
    <span
      className={getClassName('at-dropdownmenuitem', className, darkMode)}
      style={getBaseStyle(style)}
      {...events}
    >
      <Label className={labelClassName} darkMode={darkMode} label={label} />
    </span>
  );
};
