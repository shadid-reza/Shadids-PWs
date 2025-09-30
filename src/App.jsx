import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'


function App() {
  return (
    <>
      <Navbar />
      <AboutMe />
      <Experience />
      <Education />
      <Projects />
      <Achievements />

    </>
  )
}

export default App