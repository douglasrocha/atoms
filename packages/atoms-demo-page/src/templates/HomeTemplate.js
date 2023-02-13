import './homeTemplate.css';
import AccordionSection from '../organisms/Accordion/AccordionSection';
import AlertSection from '../organisms/Alert/AlertSection';
import ButtonSection from '../organisms/Button/ButtonSection';
import CardSection from '../organisms/Card/CardSection';
import CheckboxSection from '../organisms/Checkbox/CheckboxSection';
import DropDownMenuSection from '../organisms/DropDownMenu/DropDownMenuSection';
import HeadingSection from '../organisms/Heading/HeadingSection';
import ImageSection from '../organisms/Image/ImageSection';
import LabelSection from '../organisms/Label/LabelSection';
import LinkSection from '../organisms/Link/LinkSection';
import PaginationSection from '../organisms/Pagination/PaginationSection';
import ParagraphSection from '../organisms/Paragraph/ParagraphSection';
import RadioSection from '../organisms/Radio/RadioSection';

const homeTemplate = (props) => {
  const darkMode = false;

  return (
    <div className="App">
      <AccordionSection darkMode={ darkMode } />
      <AlertSection darkMode={ darkMode } />
      <ButtonSection darkMode={ darkMode } />
      <CardSection darkMode={ darkMode } />
      <CheckboxSection darkMode={ darkMode } />
      <DropDownMenuSection darkMode={ darkMode } />
      <HeadingSection darkMode={ darkMode } />
      <ImageSection darkMode={ darkMode } />
      <LabelSection darkMode={ darkMode } />
      {/* <LinkSection darkMode={ darkMode } /> */}
      <PaginationSection darkMode={ darkMode } />
      <ParagraphSection darkMode={darkMode} />
      <RadioSection darkMode={darkMode} />
    </div>
  );
}

export default homeTemplate;
