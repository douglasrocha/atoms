import * as React from 'react';
import { Label } from '../Label/Label';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './checkbox.css';
import { SyntheticEventsProps } from '../../base/SyntheticEventsBase';

export interface CheckboxProps extends SyntheticEventsProps {
  checked?: boolean,
  className?: string,
  darkMode?: boolean,
  label?: string,
  style?: React.CSSProperties
}

export const Checkbox = (props: CheckboxProps): React.ReactElement => {
    const { checked, className, darkMode, label, style } = props;
    const events = extractEvents(props);
    const baseClass = getClassName('at-checkbox', className, darkMode);
    const checkedClass = checked ? ' is-checked' : '';
    
    return (
        <div
          className={ `${baseClass}${checkedClass}` }
          style={ getBaseStyle(style) }
          { ...events }>

          <TickBox />
          <Label className="label">
            { label }
          </Label>
        </div>
    );
}

const TickBox = (): React.ReactElement =>
  <div className="box">
    <div className="tick" />
  </div>;