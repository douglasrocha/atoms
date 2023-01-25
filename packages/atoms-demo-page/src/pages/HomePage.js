import { Button, Pagination } from 'atoms-core';
import './homePage.css';

export const HomePage = () => {
  return (
    <div className="pg-home">
      <Pagination
        selectedPage={ 1 } 
        count={ 10 } />
    </div>
  );
}
