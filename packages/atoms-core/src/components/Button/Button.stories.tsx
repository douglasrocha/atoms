import * as React from 'react';
import { Button } from './Button';
import '../../../../atoms-style-wireframe/src';

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

const defaultButton = (darkMode: boolean): React.ReactElement => (
  <Button darkMode={darkMode} label="Click me!" />
);

export const DefaultButton = (): React.ReactElement => defaultButton(false);
export const DefaultDarkButton = (): React.ReactElement => defaultButton(true);

DefaultDarkButton.story = {
  name: 'Default Button (Dark Mode)',
};
