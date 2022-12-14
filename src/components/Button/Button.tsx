import * as React from 'react';
import { SyntheticEventsProps } from '../../base/SyntheticEventsBase';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './button.css';

export interface ButtonProps extends SyntheticEventsProps {
    className?: string,
    darkMode?: boolean,
    label?: string,
    style?: React.CSSProperties,
}

export const Button = (props: ButtonProps) => {
    const { className, darkMode, label, style } = props;
    const events = extractEvents(props);

    return (
        <button
          className={ getClassName('at-button', className, darkMode) }
          style={ getBaseStyle(style) }
          { ...events }>
          { label }
        </button>
    );
}
