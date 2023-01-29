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
  const nonNullPage = selectedPage ?? 1;
  const nonNullCount = count ?? 10;
  const nonNullShouldShowEnds = shouldShowEnds ?? false;
  const pagesMetadata = PaginationMetadata(
    nonNullPage, 
    nonNullCount, 
    nonNullShouldShowEnds);

  return (
    <div
      className={ `${baseClass}` }
      { ...events }
    >
      <PaginationButton
        value="<<"
        className={ getEndsNavigationClassName(
          "page first", 
          pagesMetadata.shouldShowEnds, 
          pagesMetadata.isBackwardNavigationEnabled) } />
        
      <PaginationButton
          value="<"
          className={ getSiblingNavigationClassName(
            "page previous", 
            pagesMetadata.isBackwardNavigationEnabled) } />
      
      { pagesMetadata.shouldShowFirstPageButton ?
          <PaginationButton 
            className="page"
            isSelected={ selectedPage === 1 }
            value={ 1 } /> : null }

      { pagesMetadata.shouldShowStartSeparator ?
          <PaginationSeparator /> : null }

      { pagesMetadata.range.map(page => 
          <PaginationButton
            key={ `page-${page}` } 
            className="page"
            isSelected={ page === selectedPage }  
            value={ page } />) }

      { pagesMetadata.shouldShowEndSeparator ?
          <PaginationSeparator /> : null }

      { pagesMetadata.shouldShowLastPageButton ?
          <PaginationButton 
            className="page"
            isSelected={ selectedPage === nonNullCount }
            value={ nonNullCount } /> : null }

      <PaginationButton
        value=">"
        className={ getSiblingNavigationClassName(
          "page next", 
          pagesMetadata.isForwardNavigationEnabled) } />

      <PaginationButton
        value=">>"
        className={ getEndsNavigationClassName(
          "page last", 
          pagesMetadata.shouldShowEnds, 
          pagesMetadata.isForwardNavigationEnabled) } />
    </div>
  );
};