import * as React from 'react';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';
import { Label } from '../../index';

export default (props) => {
  const { label, className, labelClassName, darkMode, style } = props;

  const onClickWrapper = (e) => {
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
