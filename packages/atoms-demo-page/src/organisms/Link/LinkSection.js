import React from 'react';
import Section from '../../molecules/Section';
import { Link } from 'atoms-core';
import "./linkSection.css";

const linkSection = (props) => {
  return (
    <Section 
      className="org-linksection"
      darkMode={ props.darkMode }>
      <Link
        darkMode={ props.darkMode }
        external={ true }
        to="https://google.com"
        target="_BLANK">
        This is an external link
      </Link>
    </Section>
  );
}

export default linkSection;