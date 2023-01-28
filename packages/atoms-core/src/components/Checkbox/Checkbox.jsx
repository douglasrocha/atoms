import * as React from 'react';
import { Label } from '../Label/Label';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';

export const Checkbox = (props) => {
  const { checked, className, darkMode, label, style } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-checkbox', className, darkMode);
  const checkedClass = checked ? ' is-checked' : '';

  return (
    <div
      className={`${baseClass}${checkedClass}`}
      style={getBaseStyle(style)}
      {...events}
    >
      <TickBox />
      <Label className="label" label={label} />
    </div>
  );
};

const TickBox = () => (
  <div className="box">
    <div className="tick" />
  </div>
);
