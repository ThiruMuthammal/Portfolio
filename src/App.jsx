import React from 'react';
import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Qualification from './components/qualification/Qualification';


function App() {

  return (
    <>
      <Header />
      <Home />
      <About />
      <Experience />
      <Qualification />
      <Skills />
    </>
  )
}

export default App


