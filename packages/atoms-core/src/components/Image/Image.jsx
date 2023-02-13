import * as React from 'react';
import {
  extractEvents,
  getClassName,
  getBaseStyle,
} from '../../services/ComponentService';
import { getFilterClass } from './ImageUtils';

// export type ImageFilterType = 'Sepia' | 'BlackAndWhite' | 'Blur';

export default (props) => {
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
