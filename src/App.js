import React from 'react';
import WeatherDisplay from './components/WeatherDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather App</h1>
      </header>
      <main>
        <WeatherDisplay />
      </main>
    </div>
  );
}

export default App;