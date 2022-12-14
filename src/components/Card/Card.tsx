import * as React from 'react';
import { SyntheticEventsProps } from '../../base/SyntheticEventsBase';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './card.css';

export interface CardProps extends SyntheticEventsProps {
    children?: React.ReactElement[],
    className? : string,
    darkMode?: boolean,
    style?: React.CSSProperties
}

export const Card = (props: CardProps) => {
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
}
