import * as React from 'react';
import { DropDownMenu } from './DropDownMenu';
import { DropDownMenuItem } from './DropDownMenuItem';
import { action } from '@storybook/addon-actions';

export default {
  title: 'DropDownMenu',
  Component: DropDownMenu,
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

const dropDownMenuItem = (idx: number) => (
  <DropDownMenuItem key={idx} label={`Item ${idx}`} />
);

const ManyItems = () => (
  <React.Fragment>
    {[...Array(20).keys()].map((idx) => dropDownMenuItem(idx))}
  </React.Fragment>
);

const defaultDropDownMenu = (darkMode: boolean) => (
  <DropDownMenu
    darkMode={darkMode}
    onDoubleClick={action('Double Click')}
    onMouseOver={action('Mouse Over')}
    label="My DropDownMenu"
  >
    <ManyItems />
  </DropDownMenu>
);

export const DefaultDropDownMenu = () => defaultDropDownMenu(false);
export const DefaultDarkDropDownMenu = () => defaultDropDownMenu(true);

DefaultDarkDropDownMenu.story = {
  name: 'Default DropDownMenu (Dark Mode)',
};
