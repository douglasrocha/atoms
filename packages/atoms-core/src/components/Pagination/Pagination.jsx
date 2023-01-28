import * as React from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';
import PaginationMetadata from './PaginationMetadata';
import { 
  PaginationButton,
  getEndsNavigationClassName,
  getSiblingNavigationClassName 
} from './PaginationButton';
import { PaginationSeparator } from './PaginationSeparator';

export default (props) => {
  const { className, count, darkMode, selectedPage, shouldShowEnds } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-pagination', className, darkMode);
  const pagesMetadata = PaginationMetadata(
    selectedPage ?? 1, 
    count ?? 10, 
    shouldShowEnds ?? false);

  return (
    <div
      className={ `${baseClass}` }
      { ...events }
    >
      <PaginationButton
        value="<<"
        className={ getEndsNavigationClassName(
          "first", 
          pagesMetadata.shouldShowEnds, 
          pagesMetadata.isBackwardNavigationEnabled) } />
        
      <PaginationButton
        value="<"
        className={ getSiblingNavigationClassName(
          "previous", 
          pagesMetadata.isBackwardNavigationEnabled) } />

      <PaginationSeparator />

      { pagesMetadata.range.map(page => 
          <PaginationButton 
            className="page"
            isSelected={ page === selectedPage }  
            value={ page } />) }

      <PaginationSeparator />
      
      <PaginationButton
        value=">"
        className={ getSiblingNavigationClassName(
          "next", 
          pagesMetadata.isForwardNavigationEnabled) } />

      <PaginationButton
        value=">>"
        className={ getEndsNavigationClassName(
          "last", 
          pagesMetadata.shouldShowEnds, 
          pagesMetadata.isForwardNavigationEnabled) } />
    </div>
  );
};