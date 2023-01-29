import './homePage.css';
import { 
  Accordion,
  Alert,
  Button, 
  Pagination 
} from 'atoms-core'; 

function App() {
  return (
    <div className="App">
      <Accordion title="Item 1">
        This is an accordion content
      </Accordion>
      <hr />
      <Alert 
        title="Error!" 
        severity="error">
        This is an error message
      </Alert>
      <hr />
      <Button label="Hello world!" />
      <hr />
      <Pagination 
        count={ 143 }
        selectedPage={ 143 } />
      
    </div>
  );
}

export default App;
