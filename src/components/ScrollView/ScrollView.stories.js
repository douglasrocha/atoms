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
        maxHeight="600px"
        maxWidth="90%">
        <div style={{
            height: '500px',
            width: '1500px',
            backgroundColor: 'green'
             }}/>
	  <div style={{
            height: '500px',
            width: '3000px',
            backgroundColor: 'blue'
               }}/>
	  <div style={{
            height: '500px',
            width: '2500px',
            backgroundColor: 'yellow'
        }}/>
      </ScrollView>;

export const DefaultScrollView = () => defaultScrollView(false);
export const DefaultDarkScrollView = () => defaultScrollView(true);

DefaultDarkScrollView.story = {
    name: 'Default ScrollView (Dark Mode)'
};
