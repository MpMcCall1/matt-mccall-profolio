import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Projects from './components/Projects';
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
