import * as React from 'react';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';

// export type ImageFilterType = 'Sepia' | 'BlackAndWhite' | 'Blur';

export const Image = (props) => {
  const { className, filterType, src, style, tooltip } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-image', className);
  const filterClass = getFilterClass(filterType);

  return (
    <img
      className={`${baseClass}${filterClass}`}
      style={getBaseStyle(style)}
      src={src}
      alt={tooltip}
      data-tooltip={tooltip}
      {...events}
    />
  );
};

const getFilterClass = (filterType) => {
  if (filterType === undefined) {
    return '';
  }

  return (
    {
      Sepia: ' is-sepia',
      BlackAndWhite: ' is-bw',
      Blur: ' is-blurred',
    }[filterType] || ''
  );
};
