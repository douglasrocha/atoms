import * as React from 'react';
import { Card, Paragraph } from '../../index';

export default {
  title: 'Card',
  Component: Card,
  argTypes: {
    onClick: { action: 'click' },
    onDoubleClick: { action: 'doubleclick' },
    onMouseOver: { action: 'mouse over' }
  },
  parameters: {
    actions: {
      handles: ['mouseover', 'click']
    }
  }
};

const defaultCard = (darkMode) =>
  <Card
    darkMode={ darkMode }
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
