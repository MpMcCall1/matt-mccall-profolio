import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Projects from './components/Projects';
import Navbar  from './components/Navbar';
import Home from "./components/Home";

function App() {
  return (
    <main >
      <>
        <Navbar />
        <Home />
      </>
      <About />
      <Projects />
    </main>
  );
}

export default App;
