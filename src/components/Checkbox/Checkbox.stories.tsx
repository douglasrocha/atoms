import * as React from 'react';
import { Checkbox } from './Checkbox';
import { action }from '@storybook/addon-actions';

export default {
  title: 'Checkbox',
  Component: Checkbox,
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

const defaultCheckbox = (checked: boolean, darkMode: boolean, optionNumber: number) =>
  <Checkbox
    style={{ margin: "10px 0" }}
    checked={ checked }
    darkMode={ darkMode }
    label={ `Option ${optionNumber}` } />;

const someDefaultCheckboxes = (darkMode: boolean) =>
  <div>
    { defaultCheckbox(false, darkMode, 1) }
    { defaultCheckbox(true, darkMode, 2) }
    { defaultCheckbox(false, darkMode, 3) }
    { defaultCheckbox(false, darkMode, 4) }
  </div>;

export const DefaultCheckbox = () => someDefaultCheckboxes(false);
export const DefaultDarkCheckbox = () => someDefaultCheckboxes(true);

DefaultDarkCheckbox.story = {
    name: 'Default Checkbox (Dark Mode)'
};
