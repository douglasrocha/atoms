import React from 'react';
import Section from '../../molecules/Section';
import { Image } from 'atoms-core';
import "./imageSection.css";

const imageSection = (props) => {
  return (
    <Section 
      className="org-imagesection"
      darkMode={ props.darkMode }>
      <Image
        darkMode={ props.darkMode }
        src="https://placekitten.com/300/300" />

      <Image
        darkMode={ props.darkMode }
        filterType="BlackAndWhite"
        src="https://placekitten.com/300/300" />

      <Image
        darkMode={ props.darkMode }
        filterType="Sepia"
        src="https://placekitten.com/300/300" />

      <Image
        darkMode={ props.darkMode }
        filterType="Blur"
        src="https://placekitten.com/300/300" />
    </Section>
  );
}

export default imageSection;