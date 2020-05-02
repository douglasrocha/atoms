import React from 'react';
import Button from './Button';
import { action }from '@storybook/addon-actions';

export default {
    title: 'Button',
    Component: Button
};

const defaultButton = (darkMode) =>
      <Button
        darkMode={ darkMode }
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        label="Olá" />;

export const DefaultButton = () => defaultButton(false);
export const DefaultDarkButton = () => defaultButton(true);

DefaultDarkButton.story = {
    name: 'Default Button (Dark Mode)'
};
