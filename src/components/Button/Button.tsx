import * as React from 'react';
import { BaseProps } from '../../base/BaseProps';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../services/ComponentService';
import './button.css';

export interface ButtonProps extends BaseProps {
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
