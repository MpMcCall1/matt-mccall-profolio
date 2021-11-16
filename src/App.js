import React from 'react';
import './App.css';
import About from './components/About.js';
import Projects from './components/Projects.js';
import Navbar  from './components/Navbar';

function App() {
  return (
    <main >
      <Navbar />
      <About />
      <Projects />
    </main>
  );
}

export default App;
