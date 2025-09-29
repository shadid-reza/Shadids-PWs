import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          {/*Name*/}
          <div className="flex flex-col text-center md:text-left">
            <h1 className="text-3xl font-bold text-gray-900">H M Shadid Reza Chowdhury</h1>
            <p className="text-sm text-gray-600">Full Stack Software Engineer</p>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-lg font-medium text-gray-700">
            <li>
              <a href="#about" className="hover:underline">
                About Me
              </a>
            </li>
            <li>
              <a href="#education" className="hover:underline">
                Education
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:underline">
                Experience
              </a>
            </li>
            <li>
              <a href="#achievements" className="hover:underline">
                Achievements
              </a>
            </li>
            <li>
              <a href="#cv" className="hover:underline">
                CV
              </a>
            </li>
          </ul>
        </div>

        <div className="border-b border-gray-200 my-3"></div>
        </nav>
    </header>
  );
};

export default Navbar;
