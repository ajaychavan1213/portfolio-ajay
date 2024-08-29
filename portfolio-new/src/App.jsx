import React from 'react'
import "./App.css";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import About from './components/About';

const App = () => {
  return <>
    <div className="max-w-4xl m-auto relative">
      <Navbar />
      <Home />
      <Projects />
      <Skills />
      <About />
      <Footer />
    </div>
  </>
}

export default App