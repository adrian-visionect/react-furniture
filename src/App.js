import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import './App.css';
import CoffeeTables from './components/CoffeeTables/CoffeeTables';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Slider />
      <CoffeeTables />
    </div>
  );
}

export default App;
