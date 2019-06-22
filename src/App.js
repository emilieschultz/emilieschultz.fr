import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Work from './components/work';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
    </div>
  );
}

export default App;
