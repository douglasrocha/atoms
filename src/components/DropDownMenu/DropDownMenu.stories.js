import React from 'react';
import DropDownMenu from './DropDownMenu';
import DropDownMenuItem from './DropDownMenuItem';
import { action }from '@storybook/addon-actions';

export default {
    title: 'DropDownMenu',
    Component: DropDownMenu
};

const dropDownMenuItem = (idx) =>
      <DropDownMenuItem
        key={ idx }
        children={ `Item ${idx}` }/>;

const ManyItems = () =>
      <React.Fragment>
        { [...Array(20).keys()].map(idx => dropDownMenuItem(idx)) }
      </React.Fragment>;

const defaultDropDownMenu = (darkMode) =>
      <DropDownMenu
        darkMode={ darkMode }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        children="This is a DropDownMenu!">
        <ManyItems />
      </DropDownMenu>;

export const DefaultDropDownMenu = () => defaultDropDownMenu(false);
export const DefaultDarkDropDownMenu = () => defaultDropDownMenu(true);

DefaultDarkDropDownMenu.story = {
    name: 'Default DropDownMenu (Dark Mode)'
};
