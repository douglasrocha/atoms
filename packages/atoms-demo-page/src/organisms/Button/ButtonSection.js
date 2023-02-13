import React from 'react';
import Section from '../../molecules/Section';
import { Button } from 'atoms-core';
import "./buttonSection.css";

export default (props) => {
  return (
    <Section 
      className="org-buttonsection"
      darkMode={ props.darkMode }>
      <Button label="Hello world!" darkMode={ props.darkMode} />
    </Section>
  );
}