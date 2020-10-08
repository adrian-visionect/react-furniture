import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import './App.css';
import CoffeeTables from './components/CoffeeTables/CoffeeTables';
import ProductsList from './components/ProductsList/ProductsList';
import Sale from './components/Sale/Sale';
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Slider />
      <CoffeeTables />
      <ProductsList />
      <Sale />
    </div>
  );
}

export default App;
