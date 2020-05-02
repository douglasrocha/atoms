import React from 'react';
import Paragraph from './Paragraph';
import { action }from '@storybook/addon-actions';

export default {
    title: 'Paragraph',
    Component: Paragraph
};

const defaultParagraph = (darkMode) =>
      <Paragraph
        darkMode={ darkMode }
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        children="This is a paragraph!" />;

export const DefaultParagraph = () => defaultParagraph(false);
export const DefaultDarkParagraph = () => defaultParagraph(true);

DefaultDarkParagraph.story = {
    name: 'Default Paragraph (Dark Mode)'
};
