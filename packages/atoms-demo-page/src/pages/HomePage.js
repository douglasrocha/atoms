import './homePage.css';
import { 
  Button, 
  Pagination 
} from 'atoms-core'; 

function App() {
  return (
    <div className="App">
      <Button label="Hello world!" />
      <Pagination 
        count={ 143 }
        selectedPage={ 143 } />
    </div>
  );
}

export default App;
