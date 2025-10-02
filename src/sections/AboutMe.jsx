import React from "react";
import profileImage from "../assets/photos/shadid-convo.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4">
      <div className="pt-4 rounded-md">

        {/* Name Section */}
        <div className="mb-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-gray-900">H M Shadid Reza Chowdhury</h1>
          <p className="text-sm text-gray-600">Full Stack Software Engineer | Aspiring PhD Researcher</p>
        </div>

        {/* Image + Paragraph */}
        <div className="md:flex md:items-start md:gap-9">
          {/* Profile Image */}
          <img
            src={profileImage}
            alt="Profile"
            className="
          float-right ml-4 mb-4
          w-24 sm:w-32
          md:float-none md:ml-0 md:mb-0 md:w-48 md:h-48
          md:order-last
          rounded-lg shadow-lg
          transition-all duration-200
        "
          />

          {/* Paragraph Content */}
          <div className="md:flex-1">
            <p className="text-lg leading-relaxed text-justify">
              I’m a Software Engineer with over a year of experience developing scalable web applications at{" "}
              <a href="https://hawarit.com" target="_blank" rel="noopener noreferrer">HawarIT Limited</a>. I work mostly with ASP .NET Core, DevOps, making systems secure by design.{" "}
              I hold a B.Sc. in <a href="https://cse.iutoic-dhaka.edu/" target="_blank" rel="noopener noreferrer">Computer Science and Engineering</a>{" "}
              from <a href="https://www.iutoic-dhaka.edu/" target="_blank" rel="noopener noreferrer">Islamic University of Technology (IUT)</a>, Dhaka, Bangladesh.
            </p>

            <p className="text-lg leading-relaxed mt-4 text-justify">
              I’m passionate about computer security, digital forensics, and blockchain.{" "}
              I love pushing my skills at various cybersecurity workshops and hackathons, and{" "}
              one highlight was when me and my team took home the <span className="font-semibold">Bronze Award</span> in the <em>SDG-3: Good Health and Well Being</em> category{" "}
              at the <a href="https://www.ibcol.org/" target="_blank" rel="noopener noreferrer">International Blockchain Olympiad (IBCOL 2022)</a>.
            </p>
          </div>
        </div>

        <div className="clear-both" />
      </div>
    </section>
  );
};

export default AboutMe;
