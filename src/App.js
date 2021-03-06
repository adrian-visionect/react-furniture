import React from 'react';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import './App.css';
import CoffeeTables from './components/CoffeeTables/CoffeeTables';
import ProductsList from './components/ProductsList/ProductsList';
import Sale from './components/Sale/Sale';
import Bestseller from './components/Bestseller/Bestseller';
import Collections from './components/Collections/Collections';
import DayDeal from './components/DayDeal/DayDeal';
import Decorations from './components/Decorations/Decorations';
import Architects from './components/Architects/Architects';
import Newsletter from './components/Newsletter/Newsletter';
import OurBlogs from './components/OurBlogs/OurBlogs';
import Rules from './components/Rules/Rules';
import Producers from './components/Producers/Producers';
import Informations from './components/Informations/Informations';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Slider />
      <CoffeeTables />
      <ProductsList />
      <Sale />
      <Bestseller />
      <Collections />
      <DayDeal />
      <Decorations />
      <Architects />
      <Newsletter />
      <OurBlogs />
      <Rules />
      <Producers />
      <Informations />
      <Footer />
    </div>
  );
}

export default App;
