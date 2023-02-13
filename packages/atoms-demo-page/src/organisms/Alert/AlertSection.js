import React from 'react';
import Section from '../../molecules/Section';
import { Alert } from 'atoms-core';
import "./alertSection.css";

export default (props) => {
  return (
    <Section 
      className="org-alertsection"
      darkMode={ props.darkMode }>
      <Alert 
        darkMode={ props.darkMode }
        title="Error!" 
        severity="error">
        This is an error message
      </Alert>
    </Section>
  );
}