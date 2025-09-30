import React from "react";

import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import ScrollToTopButton from './components/ScrollToTop'

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />
      <main className="space-y-1">
        <AboutMe />
        <Experience />
        <Education />
        <Achievements />
        <Projects />
      </main>

      <ScrollToTopButton />
    </div>
  )
}

export default App