import * as React from 'react';
import { Radio } from './Radio';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Radio Button ',
  Component: Radio
};

const defaultRadio =
  (checked: boolean, darkMode: boolean, optionNumber: number) =>
    <Radio
      style={{ margin: '10px 0' }}
      checked={ checked }
      darkMode={ darkMode }
      onClick={ action('Click') }
      onDoubleClick={ action('Double Click') }
      onMouseOver={ action('Mouse Over') }
      label={ `Option ${optionNumber}` } />;

const someDefaultRadios = (darkMode: boolean) =>
  <div>
    { defaultRadio(false, darkMode, 1) }
    { defaultRadio(true, darkMode, 2) }
    { defaultRadio(false, darkMode, 3) }
    { defaultRadio(false, darkMode, 4) }
  </div>;

export const DefaultRadioButton = () => someDefaultRadios(false);
export const DefaultDarkRadioButton = () => someDefaultRadios(true);

DefaultDarkRadioButton.story = {
  name: 'Default Radio Button (Dark Mode)'
};
