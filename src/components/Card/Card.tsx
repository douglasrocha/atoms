import * as React from 'react';
import { BaseProps } from '../../base/BaseProps';
import {
  extractEvents,
  getClassName,
  getBaseStyle
} from '../../services/ComponentService';
import './card.css';

export interface CardProps extends BaseProps {
  children?: React.ReactElement[]
  className?: string
  darkMode?: boolean
  style?: React.CSSProperties
}

export const Card = (props: CardProps): React.ReactElement => {
  const { children, className, darkMode, style } = props;
  const events = extractEvents(props);

  return (
    <div
      className={ getClassName('at-card', className, darkMode) }
      style={ getBaseStyle(style) }
      { ...events }>
      { children }
    </div>
  );
};
