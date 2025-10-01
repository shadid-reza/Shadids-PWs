import React from "react";

import "./App.css"
import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Education from './sections/Education'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Achievements from './sections/Achievements'
import ScrollToTopButton from './components/ScrollToTop'
import Footer from './components/Footer'
import News from "./sections/News";

function App() {
  return (
    <div className="bg-white min-h-screen text-gray-900">
      <Navbar />
      <main className="space-y-1">
        <AboutMe />
        <News />
        <Experience />
        <Education />
        <Achievements />
        <Projects />
      </main>

      <Footer />
      <ScrollToTopButton />
    </div>
  )
}

export default App