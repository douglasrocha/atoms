import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Link } from '../../index';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Link',
  Component: Link,
};

const defaultLink = (darkMode, isExternal, to) => (
  <BrowserRouter>
    <Link
      darkMode={darkMode}
      isExternal={ isExternal }
      onClick={action('Click')}
      onDoubleClick={action('Double Click')}
      onMouseOver={action('Mouse Over')}
      to={to}
      target="_BLANK"
    >
      This is a link!
    </Link>
  </BrowserRouter>
);

export const DefaultLink = () => defaultLink(false, false, '#');
export const DefaultDarkLink = () => defaultLink(true, false, '#');
export const ExternalLink = () => defaultLink(false, true, 'https://www.google.com');

DefaultDarkLink.story = {
  name: 'Default Link (Dark Mode)',
};
