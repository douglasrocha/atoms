import React from 'react';
import Section from '../../molecules/Section';
import { Link } from 'atoms-core';
import "./linkSection.css";

const linkSection = (props) => {
  return (
    <Section 
      className="org-linksection"
      darkMode={ props.darkMode }>
      {/* <Link
        darkMode={ props.darkMode }
        isExternal={ false }
        to={ "#" }
        target="_BLANK">
        Internal Link
      </Link> */}
      <Link
        darkMode={ props.darkMode }
        isExternal={ true }
        to={ "https://google.com" }
        target="_BLANK">
        External Link
      </Link>
    </Section>
  );
}

export default linkSection;