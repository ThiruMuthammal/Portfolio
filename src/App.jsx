import React from 'react';
import './App.css'
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Experience from './components/experience/Experience';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/Scrollup';



function App() {

  return (
    <>
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Experience />
        <Qualification />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App


