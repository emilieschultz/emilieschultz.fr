import React from 'react';
import './App.css';
import Header from './components/header';
import About from './components/about';
import Work from './components/work';
import Studies from './components/studies';
import Skills from './components/skills';
import Contact from './components/contact';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Work />
      <Studies />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
