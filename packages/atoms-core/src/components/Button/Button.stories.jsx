import * as React from 'react';
import { Button } from '../../index';
import 'atoms-style-wireframe';

export default {
  title: 'Button',
  Component: Button,
  argTypes: {
    onClick: { action: 'click' },
    onDoubleClick: { action: 'doubleclick' },
    onMouseOver: { action: 'mouse over' },
  },
  parameters: {
    actions: {
      handles: ['mouseover', 'click'],
    },
  },
};

const defaultButton = (darkMode) => (
  <Button darkMode={darkMode} label="Click me!" />
);

export const DefaultButton = () => defaultButton(false);
export const DefaultDarkButton = () => defaultButton(true);

DefaultDarkButton.story = {
  name: 'Default Button (Dark Mode)',
};
