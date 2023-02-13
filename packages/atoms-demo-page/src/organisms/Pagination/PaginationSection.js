import React from 'react';
import Section from '../../molecules/Section';
import { Pagination } from 'atoms-core';
import "./paginationSection.css";

const paginationSection =  (props) => {
  return (
    <Section 
      className="org-paginationsection"
      darkMode={ props.darkMode }>
      <Pagination 
        count={ 143 }
        darkMode={ props.darkMode }
        selectedPage={ 143 } />
    </Section>
  );
}

export default paginationSection;