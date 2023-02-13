import React from 'react';
import Section from '../../molecules/Section';
import { Radio } from 'atoms-core';
import "./radioSection.css";

const checkboxSection = (props) => {
  return (
    <Section 
      className="org-checkboxsection"
      darkMode={ props.darkMode }>
      <Radio 
        className="item"
        darkMode={ props.darkMode }
        label="Radio 1" />
      <Radio 
        className="item"
        darkMode={ props.darkMode }
        label="Radio 2" />
      <Radio 
        className="item"
        darkMode={ props.darkMode }
        label="Radio 3" />
      <Radio 
        className="item"
        darkMode={ props.darkMode }
        label="Radio 4" />
    </Section>
  );
}

export default checkboxSection;