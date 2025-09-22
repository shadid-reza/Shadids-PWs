import React from "react";

const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <nav className="max-w-6xl mx-auto px-4 py-3">
        {/* Top: Name + Title */}
        <div className="flex flex-col items-start">
          <h1 className="text-3xl font-bold text-gray-900">Your Name</h1>
          <p className="text-sm text-gray-600">Your Title / Position</p>
        </div>

        {/* Divider only under content */}
        <div className="border-b border-gray-200 my-3"></div>

        {/* Links in a row */}
        <ul className="flex flex-row items-center gap-8 text-lg font-medium text-gray-700">
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
      </nav>
    </header>
  );
};

export default Navbar;
