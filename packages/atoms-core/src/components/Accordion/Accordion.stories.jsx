import * as React from 'react';
import { Accordion, Paragraph } from '../../index';

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

const defaultButton = (darkMode) => (
  <Accordion darkMode={darkMode} title="Item 1">
      <Paragraph>This is the first accordion item</Paragraph>
  </Accordion>
);

export const DefaultAccordion = () => defaultButton(false);
export const DefaultDarkAccordion = () => defaultButton(true);

DefaultDarkAccordion.story = {
  name: 'Default Button (Dark Mode)',
};
