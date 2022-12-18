import * as React from 'react';
import { BaseProps } from '../../base/BaseProps';
import {
  extractEvents,
  getClassName,
  getBaseStyle
} from '../../services/ComponentService';
import './paragraph.css';

export interface ParagraphProps extends BaseProps {
  children?: React.ReactElement | string
}

export const Paragraph = (props: ParagraphProps) => {
  const { children, className, darkMode, style } = props;
  const events = extractEvents(props);

  return (
    <p
      className={ getClassName('at-paragraph', className, darkMode) }
      style={ getBaseStyle(style) }
      { ...events }>
      { children }
    </p>
  );
};
