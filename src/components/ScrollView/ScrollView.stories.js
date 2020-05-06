import React from 'react';
import ScrollView from './ScrollView';
import { action }from '@storybook/addon-actions';

export default {
    title: 'ScrollView',
    Component: ScrollView
};

const defaultScrollView = (darkMode) =>
      <ScrollView
        darkMode={ darkMode }
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
<<<<<<< HEAD
        maxHeight="100vh"
        maxWidth="100%">
        <div style={{
            height: '2500px',
=======
        maxHeight="500px"
        maxWidth="100%">
        <div style={{
            height: '1000px',
>>>>>>> Added ScrollView without events
            width: '500px',
            backgroundColor: 'green'
        }}/>
      </ScrollView>;

export const DefaultScrollView = () => defaultScrollView(false);
export const DefaultDarkScrollView = () => defaultScrollView(true);

DefaultDarkScrollView.story = {
    name: 'Default ScrollView (Dark Mode)'
};
