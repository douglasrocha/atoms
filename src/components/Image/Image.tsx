import * as React from 'react';
import { BaseProps } from '../../base/BaseProps';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './image.css';

export type ImageFilterType = 'Sepia'|'BlackAndWhite'|'Blur';

export interface ImageProps extends BaseProps {
    filterType?: ImageFilterType,
    src?: string,
    tooltip?: string
}

export const Image = (props: ImageProps) => {
    const { className, filterType, src, style, tooltip } = props;
    const events = extractEvents(props);
    const baseClass = getClassName('at-image', className);
    const filterClass = getFilterClass(filterType);

    return (
        <img
          className={ `${baseClass}${filterClass}` }
          style={ getBaseStyle(style) }
          src={ src }
          alt={ tooltip } 
          data-tooltip={ tooltip }
          { ...events } />
    );
}

const getFilterClass = (filterType?: ImageFilterType) => 
    filterType === undefined ? '' : {
        'Sepia': ' is-sepia',
        'BlackAndWhite': ' is-bw',
        'Blur': ' is-blurred'
    }[filterType] || '';