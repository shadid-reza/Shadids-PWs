import React from "react";
import styles from "../assets/css/Navbar.module.css";
import { NavLink, useLocation } from "react-router-dom";
import {
  FaEnvelopeSquare,
  FaGithubSquare,
  FaLinkedin,
  FaFacebookSquare
} from "react-icons/fa";

const navLinks = [
  { href: "/", label: "about" },
  { href: "/cv", label: "curriculum vitae" },
  { href: "/projects", label: "projects" },
  { href: "/achievements", label: "achievements" }
];

const Navbar = () => {
  const location = useLocation(); // <- get current route
  const isHomePage = location.pathname === "/"; // <- check if home
  return (
    <header className="w-full bg-white">
      <nav className="max-w-6xl mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          {/* Contact Icons */}
          <div className="flex justify-center md:justify-start gap-4 text-2xl">
            {isHomePage ? (
              <>
                <a
                  href="mailto:hmshadid25@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  style={{ color: "#D44638" }}
                >
                  <FaEnvelopeSquare />
                </a>
                <a
                  href="https://github.com/shadid-reza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  style={{ color: "#181717" }}
                >
                  <FaGithubSquare />
                </a>
                <a
                  href="https://www.linkedin.com/in/shadid-reza/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  style={{ color: "#0A66C2" }}
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.facebook.com/h.m.shadid"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  style={{ color: "#1877F2" }}
                >
                  <FaFacebookSquare />
                </a>
              </>
            ) : (
              <NavLink to="/" className={styles.nameLink}>H M Shadid Reza Chowdhury</NavLink>
            )}
          </div>
          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center md:justify-end gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink
                  to={link.href}
                  className={({ isActive }) =>
                    `${styles.navLink} ${isActive ? styles.active : ""}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="border-b border-gray-200 my-3"></div>
      </nav>
    </header>
  );
};

export default Navbar;
