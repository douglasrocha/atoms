import * as React from 'react';
import { Accordion } from './Accordion';
import { Paragraph } from '../Paragraph/Paragraph';

export default {
  title: 'Accordion',
  Component: Accordion,
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

const defaultButton = (darkMode: boolean) => (
  <Accordion darkMode={darkMode} title="Item 1">
      <Paragraph>This is the first accordion item</Paragraph>
  </Accordion>
);

export const DefaultAccordion = (): React.ReactElement => defaultButton(false);
export const DefaultDarkAccordion = (): React.ReactElement => defaultButton(true);

DefaultDarkAccordion.story = {
  name: 'Default Button (Dark Mode)',
};
