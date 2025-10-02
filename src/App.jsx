import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css"
import Navbar from './components/Navbar'
import AboutMe from './sections/AboutMe'
import Projects from './sections/Projects'
import Achievements from './sections/Achievements'
import Resume from './sections/Resume.jsx'
import News from "./sections/News.jsx";
import Footer from './components/Footer'
import ScrollToTopButton from './components/ScrollToTop'

function App() {
  return (
    <Router basename="/shadids-pws">
      <div className="flex flex-col min-h-screen bg-white text-gray-900">
        <Navbar />
        <main className="flex-1 space-y-1">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AboutMe />
                  <News />
                </>
              }
            />
            <Route path="/cv" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="*" element={<h2 className="text-center mt-20">Page Not Found</h2>} />
          </Routes>

        </main>
        <ScrollToTopButton />
        <Footer />
      </div>
    </Router>
  )
}

export default App;
