import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { experiences } from "../../assets/data/experiences";

// Date formatter → Jan 2022
const formatDate = (dateStr) => {
  if (!dateStr || dateStr === "Present") return "Present";
  const [year, month] = dateStr.split("-");
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  return `${months[parseInt(month, 10) - 1]} ${year}`;
};

export const Experience = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4">
      <div className="card bg-white shadow-md rounded-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>

        <ul className="space-y-6">
          {experiences.map((exp) => (
            <li
              key={exp.id}
              className="list-group-item border-b last:border-none pb-4"
            >
              <div className="flex flex-col md:flex-row gap-4">
                {/* Left Column: Date + Location */}
                <div className="md:w-auto flex-shrink-0">
                  <span className="inline-block text-center bg-green-200 text-green-900 font-semibold text-xs py-1 px-3 rounded uppercase w-[145px]">
                    {`${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}`}
                  </span>
                  {exp.location && (
                    <p className="text-gray-600 mt-2 flex gap-1 justify-start md:justify-center text-xs">
                      <FaLocationDot className="text-gray-500" />
                      {exp.location}
                    </p>       
                  )}
                </div>

                {/* Right Column: Position, Company, Summary, Highlights */}
                <div className="flex-1">
                  <h6 className="font-semibold text-lg text-gray-800">
                    {exp.url ? (
                      <a
                        href={exp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600"
                      >
                        {exp.position}
                      </a>
                    ) : (
                      exp.position
                    )}
                  </h6>
                  <p className="text-gray-600 italic mb-2">{exp.name}</p>
                  {exp.summary && (
                    <p className="text-gray-700 mb-2">{exp.summary}</p>
                  )}

                  {exp.highlights && exp.highlights.length > 0 && (
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {exp.highlights.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
