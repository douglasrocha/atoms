import React from 'react';
import Checkbox from './Checkbox';
import { action }from '@storybook/addon-actions';

export default {
    title: 'Checkbox',
    Component: Checkbox
};

const defaultCheckbox = (checked, darkMode, optionNumber) =>
      <Checkbox
        style={{ margin: "10px 0" }}
        checked={ checked }
        darkMode={ darkMode }
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        label={ `Option ${optionNumber}` } />;

const someDefaultCheckboxes = (darkMode) =>
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
