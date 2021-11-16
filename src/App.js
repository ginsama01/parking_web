import Map from './Components/Map';
import './App.css';

function App() {
  const key = 'AIzaSyD04lSDr4oTpToBCg59SQ41kanzIyQGp5A'
  return (
    <div className="App">
      <header>
            Map Demo
          </header>
      <Map 
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${key}&&callback=initMap&v=weekly`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `90vh`, margin: `auto`, border: '2px solid black' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
    </div>
  );
}

export default App; //test
