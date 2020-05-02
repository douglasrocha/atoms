import React from 'react';
import Label from '../Label/Label';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './checkbox.scss';

const TickBox = () =>
      <div className="box">
        <div className="tick" />
      </div>;

export default (props) => {
    const { checked, className, darkMode, label, style } = props;
    const events = extractEvents(props);
    const baseClass = getClassName('at-checkbox', className, darkMode);
    const checkedClass = checked ? ' is-checked' : '';
    
    return (
        <div
          checked={ checked }
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
