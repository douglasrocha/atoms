import * as React from 'react';
import { Heading, HeadingWeight } from './Heading';
import { action }from '@storybook/addon-actions';

export default {
    title: 'Heading',
    Component: Heading,
    argTypes: { 
        onClick: { action: 'click' },
        onDoubleClick: { action: 'doubleclick' },
        onMouseOver: { action: 'mouse over' }
      },
      parameters: {
        actions: {
          handles: ['mouseover', 'click'],
        },
      },
};

const defaultHeading = (w: HeadingWeight, darkMode: boolean) =>
      <Heading
        w={ w }
        darkMode={ darkMode }
        onClick={ action(`Click ${w}`) }
        onDoubleClick={ action(`Double Click ${w}`) }
        onMouseOver={ action(`Mouse Over ${w}`) }
        children="This is a heading!" />;

const someHeadings = (darkMode: boolean) => (
    <div>
      { defaultHeading(1, darkMode) }
      { defaultHeading(2, darkMode) }
      { defaultHeading(3, darkMode) }
      { defaultHeading(4, darkMode) }
      { defaultHeading(5, darkMode) }
      { defaultHeading(6, darkMode) }
    </div>
);

export const DefaultHeading = () => someHeadings(false);
export const DefaultDarkHeading = () => someHeadings(true);

DefaultDarkHeading.story = {
    name: 'Default Heading (Dark Mode)'
};