import React from "react";

const Education = () => {
  const educationList = [
    {
      year: "2020 - 2024",
      degree: "B.Sc. in Computer Science and Engineering (CSE)",
      school: "Islamic University of Technology (IUT), Gazipur, Bangladesh",
    },
    {
      year: "2017 - 2019",
      degree: "Higher Secondary School Certificate,",
      school: "Rajuk Uttara Model College, Dhaka, Bangladesh",
    },
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-8">
      <div className="card bg-white shadow-md rounded-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Education</h3>

        <ul className="space-y-6">
          {educationList.map((edu, index) => (
            <li
              key={index}
              className="list-group-item border-b last:border-none pb-4"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Year badge */}
                <div className="md:w-auto flex-shrink-0">
                  <span className="inline-block text-center bg-green-200 text-green-900 font-semibold text-sm py-1 px-2 rounded uppercase w-[100px]">
                    {edu.year}
                  </span>
                </div>

                {/* Degree & Details */}
                <div className="flex-1">
                  <h6 className="font-semibold text-lg text-gray-800">
                    {edu.degree}
                  </h6>
                  <p className="text-gray-600 italic mb-2">{edu.school}</p>

                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Education;
