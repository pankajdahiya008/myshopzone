import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Deals from './components/Deals';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Slider />
      <Deals />
      </div>
  );
}

export default App;