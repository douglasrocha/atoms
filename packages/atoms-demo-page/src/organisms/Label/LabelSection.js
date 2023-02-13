import React from 'react';
import Section from '../../molecules/Section';
import { Label } from 'atoms-core';
import "./labelSection.css";

const labelSection = (props) => {
  return (
    <Section 
      className="org-labelsection"
      darkMode={ props.darkMode }>
      <Label
        darkMode={ props.darkMode }
        label="This is a label!" />
    </Section>
  );
}

export default labelSection;