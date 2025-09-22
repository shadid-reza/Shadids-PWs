import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 py-4">
      <ul className="flex justify-center items-center gap-6 lg:gap-10 px-8 py-3 shadow-md">
        <li>
          <a href="#top" className="text-gray-700 hover:text-blue-600 transition">About Me</a>
        </li>
        <li>
          <a href="#education" className="text-gray-700 hover:text-blue-600 transition">Education</a>
        </li>
        <li>
          <a href="#experience" className="text-gray-700 hover:text-blue-600 transition">Experience</a>
        </li>
        <li>
          <a href="#achievements" className="text-gray-700 hover:text-blue-600 transition">Achievements</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
