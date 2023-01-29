import * as React from 'react';
import { Label } from '../../index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Label',
  Component: Label,
};

const defaultLabel = (darkMode) => (
  <Label
    darkMode={darkMode}
    onClick={action('Click')}
    onDoubleClick={action('Double Click')}
    onMouseOver={action('Mouse Over')}
    label="This is a label!"
  />
);

export const DefaultLabel = () => defaultLabel(false);
export const DefaultDarkLabel = () => defaultLabel(true);

DefaultDarkLabel.story = {
  name: 'Default Label (Dark Mode)',
};
