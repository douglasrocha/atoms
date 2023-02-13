import React from 'react';
import Section from '../../molecules/Section';
import { Paragraph } from 'atoms-core';
import "./paragraphSection.css";

const paragraphSection = (props) => {
  return (
    <Section 
      className="org-paragraphsection"
      darkMode={ props.darkMode }>
      <Paragraph
        darkMode={ props.darkMode }>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel imperdiet justo. Vivamus eget nisi et sapien cursus tempus. Nulla eros tortor, rutrum vel ex blandit, rutrum tempor quam. Sed tempus tellus ut nunc mollis, non elementum eros placerat. Praesent eu convallis elit, eget suscipit eros. Curabitur consectetur, metus id commodo molestie, arcu nulla bibendum magna, a finibus nibh sem in erat. Vestibulum ornare libero mauris, vel suscipit tellus vehicula ac. Sed et turpis orci. Aenean vehicula mi et ante tincidunt, sed accumsan tellus volutpat. Suspendisse potenti. Aliquam dignissim, est ut dapibus egestas, neque arcu sagittis orci, quis placerat nulla libero a lectus. Pellentesque et ex malesuada, tempus nisl sit amet, eleifend nulla. In scelerisque porttitor neque eu vehicula. Donec eget pellentesque magna.
      </Paragraph>
    </Section>
  );
}

export default paragraphSection;