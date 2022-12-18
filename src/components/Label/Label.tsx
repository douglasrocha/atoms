import * as React from 'react';
import { BaseProps } from '../../base/BaseProps';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../services/ComponentService';
import './label.css';

export interface LabelProps extends BaseProps {
    label?: React.ReactElement | string
}

export const Label = (props: LabelProps) => {
    const { label, className, darkMode, style } = props;
    const events = extractEvents(props);

    return (
        <label
          className={ getClassName('at-label', className, darkMode) }
          style={ getBaseStyle(style) }
          { ...events }>
          { label }
        </label>
    );
}
