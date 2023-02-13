import './homeTemplate.css';
import { 
  Accordion,
  Alert,
  Button, 
  Pagination 
} from 'atoms-core'; 
import AccordionSection from '../organisms/Accordion/AccordionSection';
import AlertSection from '../organisms/Alert/AlertSection';
import ButtonSection from '../organisms/Button/ButtonSection';
import CardSection from '../organisms/Card/CardSection';
import CheckboxSection from '../organisms/Checkbox/CheckboxSection';
import PaginationSection from '../organisms/Pagination/PaginationSection';

function App() {
  return (
    <div className="App">
      <AccordionSection darkMode={ false } />
      <AlertSection darkMode={ true } />
      <ButtonSection darkMode={ false } />
      <CardSection darkMode={ true } />
      <CheckboxSection darkMode={ false } />
      <PaginationSection darkMode={ false } />
    </div>
  );
}

export default App;
