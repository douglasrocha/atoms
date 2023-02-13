import React from 'react';
import Section from '../../molecules/Section';
import { DropDownMenu, DropDownMenuItem } from 'atoms-core';
import "./dropDownMenuSection.css";

const dropDownMenuSection = (props) => {
  return (
    <Section 
      className="org-dropdownmenusection"
      darkMode={ props.darkMode }>
      <DropDownMenu
        darkMode={ props.darkMode }
        label="My DropDownMenu">
        {[...Array(20).keys()].map((idx) => 
          <DropDownMenuItem 
            key={ idx }
            darkMode={ props.darkMode }>
            { `Item ${idx}` }
          </DropDownMenuItem>)}
      </DropDownMenu>
    </Section>
  );
}

export default dropDownMenuSection;