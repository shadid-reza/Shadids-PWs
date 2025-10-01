import React from "react";
import { 
  FaEnvelopeSquare, 
  FaGithubSquare, 
  FaLinkedin, 
  FaFacebookSquare, 
  FaTwitterSquare 
} from "react-icons/fa";


const Navbar = () => {
  return (
    <header className="w-full bg-white">
      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
         {/* Contact Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            <a href="mailto:hmshadid25@gmail.com" target="_blank" rel="noopener noreferrer">
              <FaEnvelopeSquare />
            </a>
            <a href="https://github.com/shadid-reza" target="_blank" rel="noopener noreferrer">
              <FaGithubSquare />
            </a>
            <a href="https://www.linkedin.com/in/shadid-reza/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/h.m.shadid" target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare />
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-lg font-medium text-gray-700">
            <li>
              <a href="#about" className="hover:underline">
                about
              </a>
            </li>
            <li>
              <a href="#education" className="hover:underline">
                education
              </a>
            </li>
            <li>
              <a href="#experience" className="hover:underline">
                experience
              </a>
            </li>
            <li>
              <a href="#achievements" className="hover:underline">
                achievements
              </a>
            </li>
            <li>
              <a href="#cv" className="hover:underline">
                curriculum vitae
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
