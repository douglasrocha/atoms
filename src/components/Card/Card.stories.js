import React from 'react';
import Card from './Card';
import Paragraph from '../Paragraph/Paragraph';
import { action }from '@storybook/addon-actions';

export default {
    title: 'Card',
    Component: Card
};

const defaultCard = (darkMode) =>
      <Card
        darkMode={ darkMode }
        onClick={ action("Click") }
        onDoubleClick={ action("Double Click") }
        onMouseOver={ action("Mouse Over") }
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            width: '300px',
            height: '300px'
        }}>

        <Paragraph>This is a card</Paragraph>
        <Paragraph>You can add information inside</Paragraph>
        <Paragraph>You will probably use this a lot</Paragraph>
      </Card>;

export const DefaultCard = () => defaultCard(false);
export const DefaultDarkCard = () => defaultCard(true);

DefaultDarkCard.story = {
    name: 'Default Card (Dark Mode)'
};
