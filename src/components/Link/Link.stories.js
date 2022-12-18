import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Link from './Link';
import { action }from '@storybook/addon-actions';

export default {
    title: 'Link',
    Component: Link
};

const defaultLink = (darkMode, to) => (
    <BrowserRouter>
      <Link
        darkMode={ darkMode }
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        to={ to }
        target="_BLANK"
        children="This is a link!" />
    </BrowserRouter>
);

export const DefaultLink = () => defaultLink(false, '#');
export const DefaultDarkLink = () => defaultLink(true, '#');
export const ExternalLink = () => defaultLink(false, 'https://www.google.com');

DefaultDarkLink.story = {
    name: 'Default Link (Dark Mode)'
};