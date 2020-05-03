import React from 'react';
import {
    extractEvents,
    getClassName,
    getBaseStyle
} from '../../utils/ComponentUtils';
import './image.scss';

const getFilterClass = (filter) => {
    return {
        'sepia': ' is-sepia',
        'b&w': ' is-bw',
        'blur': ' is-blurred'
    }[filter] || '';
};

export default (props) => {
    const { children, className, filter, src, style } = props;
    const events = extractEvents(props);
    const baseClass = getClassName('at-image', className);
    const filterClass = getFilterClass(filter);

    return (
        <img
          className={ `${baseClass}${filterClass}` }
          style={ getBaseStyle(style) }
          src={ src }
          { ...events } />
    );
}
