import React from 'react';
import Section from '../../molecules/Section';
import { Checkbox } from 'atoms-core';
import "./checkboxSection.css";

const checkboxSection = (props) => {
  return (
    <Section 
      className="org-checkboxsection"
      darkMode={ props.darkMode }>
      <Checkbox 
        className="item"
        darkMode={ props.darkMode }
        label="Checkbox 1" />
      <Checkbox 
        className="item"
        darkMode={ props.darkMode }
        label="Checkbox 2" />
      <Checkbox 
        className="item"
        darkMode={ props.darkMode }
        label="Checkbox 3" />
      <Checkbox 
        className="item"
        darkMode={ props.darkMode }
        label="Checkbox 4" />
    </Section>
  );
}

export default checkboxSection;