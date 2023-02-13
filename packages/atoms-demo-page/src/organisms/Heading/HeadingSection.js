import React from 'react';
import Section from '../../molecules/Section';
import { Heading } from 'atoms-core';
import "./headingSection.css";

const headingSection = (props) => {
  return (
    <Section 
      className="org-headingsection"
      darkMode={ props.darkMode }>
      <Heading 
        darkMode={ props.darkMode }
        w={ 1 }>
        This is heading 1
      </Heading>
      <Heading 
        darkMode={ props.darkMode }
        w={ 2 }>
        This is heading 2
      </Heading>
      <Heading 
        darkMode={ props.darkMode }
        w={ 3 }>
        This is heading 3
      </Heading>
      <Heading 
        darkMode={ props.darkMode }
        w={ 4 }>
        This is heading 4
      </Heading>
      <Heading 
        darkMode={ props.darkMode }
        w={ 5 }>
        This is heading 5
      </Heading>
      <Heading 
        darkMode={ props.darkMode }
        w={ 6 }>
        This is heading 6
      </Heading>
    </Section>
  );
}

export default headingSection;