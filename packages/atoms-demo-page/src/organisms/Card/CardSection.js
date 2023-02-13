import React from 'react';
import Section from '../../molecules/Section';
import { Button, Card, Paragraph } from 'atoms-core';
import "./cardSection.css";

export default (props) => {
  return (
    <Section 
      className="org-cardsection"
      darkMode={ props.darkMode }>
      <Card darkMode={ props.darkMode }>
        <Paragraph darkMode={ props.darkMode }>
          This is just a paragraph to demonstrate how the card element works
        </Paragraph>
      </Card>
    </Section>
  );
}