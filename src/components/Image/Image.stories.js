import React from 'react';
import Image from './Image';
import { action }from '@storybook/addon-actions';

export default {
    title: 'Image',
    Component: Image
};

export const DefaultImage = () =>
    <Image
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        src="https://placekitten.com/300/300" />;

export const Filters = () => (
    <div>
      <Image
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        src="https://placekitten.com/300/300" />;
      
      <Image
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        filter="b&w"
        src="https://placekitten.com/300/300" />;

      <Image
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        filter="sepia"
        src="https://placekitten.com/300/300" />

      <Image
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        filter="blgur"
        src="https://placekitten.com/300/300" />
    </div>
);
