import * as React from 'react';
import { useState } from 'react';
import {
  extractEvents,
  getClassName
} from '../../services/ComponentService';
import { BaseProps } from '../../base/BaseProps';
import { Label } from '../Label/Label';

export interface AccordionProps extends BaseProps {
  children?: React.ReactNode,
  title?: string
}

export const Accordion = (props: AccordionProps) => {
  const { children, className, darkMode, title } = props;
  const events = extractEvents(props);
  const baseClass = getClassName('at-accordion', className, darkMode);
  const [visibility, setVisibility] = useState(false);
  const visibilityClass = visibility ? ' is-visible' : '';
  return (
    <div 
      className={ `${baseClass}${visibilityClass}` }
      {...events}>
        <div className="titlebar" onClick={ () => setVisibility(!visibility) }>
          <Label 
            className="title" 
            darkMode={ darkMode } 
            label={title} />
        </div>
        <div className='content'>
          { children }
        </div>
    </div>
  );
}