import React from 'react';
import Button from './Button';
import { action }from '@storybook/addon-actions';

export default {
    title: 'Button',
    Component: Button
};

export const DefaultButton = () =>
    <Button
      onClick={ action("Clicked") }
      label="Olá" />;

DefaultButton.story = {
    name: 'Default Button'
};
