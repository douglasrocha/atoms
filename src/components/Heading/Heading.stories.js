import React from 'react';
import Heading from './Heading';
import { action }from '@storybook/addon-actions';

export default {
    title: 'Heading',
    Component: Heading
};

const defaultHeading = (w, darkMode) =>
      <Heading
        w={ w }
        darkMode={ darkMode }
        onClick={ action(`Click ${w}`) }
        onDoubleClick={ action(`Double Click ${w}`) }
        onMouseOver={ action(`Mouse Over ${w}`) }
        children="This is a heading!" />;

const SomeHeadings = (darkMode) => (
    <div>
      { defaultHeading(1, darkMode) }
      { defaultHeading(2, darkMode) }
      { defaultHeading(3, darkMode) }
      { defaultHeading(4, darkMode) }
      { defaultHeading(5, darkMode) }
      { defaultHeading(6, darkMode) }
    </div>
);

export const DefaultHeading = () =>
    <SomeHeadings darkMode={ false } />;

export const DefaultDarkHeading = () =>
    <SomeHeadings darkMode={ true } />;

DefaultDarkHeading.story = {
    name: 'Default Heading (Dark Mode)'
};
