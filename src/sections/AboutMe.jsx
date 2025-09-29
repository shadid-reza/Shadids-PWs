import React from "react";
import profileImage from "../assets/shadid-light-square.png";

const AboutMe = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gray-100 p-4 rounded-md">
        <div className="md:flex md:items-start md:gap-6">
          <img
            src={profileImage}
            alt="Profile"
            className="
              float-right ml-4 mb-4
              w-24 sm:w-32         
              md:float-none md:ml-0 md:mb-0 md:w-64 md:h-64
              md:order-last
              rounded-lg shadow-lg
              transition-all duration-200
            "
          />

          <div className="md:flex-1">
            <p className="text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
              <span className="font-semibold text-blue-600">
                Passionate about innovation
              </span>{" "}
              and driven by curiosity, I enjoy transforming ideas into{" "}
              <span className="font-semibold text-green-600">
                meaningful digital experiences
              </span>
              . With a strong focus on{" "}
              <span className="font-semibold text-purple-600">clean design</span> and{" "}
              <span className="font-semibold text-red-500">scalable architecture</span>
              , I strive to build solutions that are both{" "}
              <span className="font-semibold text-orange-500">impactful</span> and{" "}
              <span className="font-semibold text-indigo-500">user-centric</span>.
            </p>

            <p className="text-lg leading-relaxed mt-4">
              Outside of coding, I love exploring{" "}
              <span className="font-semibold text-pink-500">emerging technologies</span>
              , contributing to{" "}
              <span className="font-semibold text-teal-600">open-source projects</span>
              , and continuously learning new ways to solve{" "}
              <span className="font-semibold text-yellow-600">real-world problems</span>.
            </p>
          </div>
        </div>

        <div className="clear-both" />
      </div>
    </section>
  );
};

export default AboutMe;
