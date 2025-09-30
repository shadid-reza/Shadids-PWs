import React from "react";

const Education = () => {
  const educationList = [
    {
      degree: "Ph.D. in Computer Science",
      school: "Brown University",
      year: "2019",
      description:
        "Focused on cybersecurity and privacy, with research in scalable encrypted systems and AI/ML security intersections.",
    },
    {
      degree: "M.Sc. in Computer Science",
      school: "University of Crete",
      year: "2014",
      description: "Specialized in software engineering and cryptography.",
    },
    {
      degree: "B.Sc. in Computer Science",
      school: "University of Crete",
      year: "2012",
      description: "Studied core computer science topics and algorithms.",
    },
  ];

  return (
    <section id="education" className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>

        <div className="space-y-6">
          {educationList.map((edu, index) => (
            <div
              key={index}
              className="md:flex md:items-start md:gap-6"
            >
              {/* Left: Degree and Year */}
              <div className="md:w-1/3 flex flex-col md:flex-col mb-2 md:mb-0">
                <h3 className="text-xl font-semibold text-blue-600">{edu.degree}</h3>
                <p className="text-gray-700">{edu.school}</p>
                <p className="text-gray-500">{edu.year}</p>
              </div>

              {/* Right: Description */}
              <div className="md:flex-1 text-gray-700">
                <p>{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
