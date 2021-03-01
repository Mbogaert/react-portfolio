import React, {useState} from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';

function App() {

  return (
    <div>
      <Header></Header>
      <About></About>
      <Portfolio></Portfolio>
      <Footer />
    </div>
  );
}

export default App;
