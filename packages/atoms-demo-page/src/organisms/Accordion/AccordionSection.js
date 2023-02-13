import React from 'react';
import Section from '../../molecules/Section';
import { Accordion } from 'atoms-core';
import "./accordionSection.css";

const accordionSection = (props) => {
  return (
    <Section 
      className="org-accordionsection"
      darkMode={ props.darkMode }>
      <Accordion title="Item 1" darkMode={ props.darkMode }>
        This is an accordion content
      </Accordion>
    </Section>
  );
}

export default accordionSection;