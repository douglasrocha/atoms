import * as React from 'react';
import { Label } from '../Label/Label';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';
import './radio.css';
import { BaseProps } from '../../base/BaseProps';

export interface RadioProps extends BaseProps {
  checked?: boolean;
  label?: React.ReactElement | string;
}

export const Radio = (props: RadioProps) => {
  const { checked, className, darkMode, label, style } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-radio', className, darkMode);
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
