import './App.css';
import data from './data';
import { useState } from 'react';
import Tours from './components/Tours';

const App = () => {
  const [tours, setTours] = useState(data);


  //To remove tours
  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  //To refresh the tours
  if (tours.length === 0) {
    return (
      <div className='refresh'>
        <h2>No tours Left</h2>
        <button className='btn-white' onClick={() => setTours(data)}>
          Refresh
        </button>
      </div>
    )
  }

  return (
    <div className='App'>

      {/* Tours containing data is passed to tours component */}
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
}

export default App;
