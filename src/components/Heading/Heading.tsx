import * as React from 'react';
import { BaseProps } from '../../base/BaseProps';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../services/ComponentService';
import './heading.css';

export type HeadingWeight = 1|2|3|4|5|6;

export interface HeadingProps extends BaseProps {
    children?: React.ReactElement | string,
    className?: string,
    w?: HeadingWeight
}

export const Heading = (props: HeadingProps) => {
    const { children, className, darkMode, style, w } = props;
    const events = extractEvents(props);
    const attributes = {
        className: getClassName('at-heading', className, darkMode),
        style: getBaseStyle(style),
        children,
        ...events
    };
    
    switch (w) {
        case 6: return <h6 { ...attributes } />;
        case 5: return <h5 { ...attributes } />;
        case 4: return <h4 { ...attributes } />;
        case 3: return <h3 { ...attributes } />;
        case 2: return <h2 { ...attributes } />;
        default: return <h1 { ...attributes } />;
    }
}
