import React from "react";
import { FaLocationDot } from "react-icons/fa6";

// Example experience data
const experiences = [
  {
    id: 1,
    startDate: "2023-01",
    endDate: "Present",
    location: "Dhaka, Bangladesh",
    position: "Software Engineer",
    name: "TechCorp Solutions",
    summary: "Building modern web applications and APIs.",
    url: "https://techcorp.com",
    highlights: [
      "Developed scalable REST APIs with .NET and EF Core",
      "Led migration to Azure cloud environment",
      "Implemented CI/CD pipelines for automated deployments",
    ],
  },
  {
    id: 2,
    startDate: "2021-06",
    endDate: "2022-12",
    location: "Remote",
    position: "Frontend Developer",
    name: "Creative Labs",
    summary: "Worked on responsive UI development with React.",
    url: "https://creativelabs.com",
    highlights: [
      "Built reusable React components with Tailwind CSS",
      "Improved site performance and accessibility",
      "Collaborated in an agile team across time zones",
    ],
  },
];

const formatDate = (start, end) => {
  const format = (dateStr) => {
    if (!dateStr || dateStr === "Present") return "Present";
    const [year, month] = dateStr.split("-");
    return `${year}.${month}`;
  };
  return `${format(start)} - ${format(end)}`;
};

const Experience = () => {
  // Sort by startDate descending
  const sortedExperiences = [...experiences].sort(
    (a, b) => new Date(b.startDate) - new Date(a.startDate)
  );

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-8">
      <div className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Experience</h2>

        <ul className="divide-y divide-gray-300">
          {sortedExperiences.map((exp) => (
            <li key={exp.id} className="py-6">
              <div className="md:flex md:items-start md:gap-6">
                {/* Left Column: Date + Location */}
                <div className="md:w-1/4 text-center mb-4 md:mb-0">
                  {/* Date Badge */}
                  <div className="inline-block bg-blue-600 text-white text-sm font-semibold px-3 py-1 rounded uppercase">
                    {formatDate(exp.startDate, exp.endDate)}
                  </div>

                  {/* Location */}
                  {exp.location && (
                    <p className="text-gray-600 mt-2 flex justify-center items-center gap-1 text-sm">
                      <FaLocationDot className="text-gray-500" />
                      {exp.location}
                    </p>
                  )}
                </div>

                {/* Right Column: Details */}
                <div className="md:flex-1">
                  <h3 className="text-xl font-bold text-gray-800">
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
                  </h3>
                  <h4 className="text-gray-700 mt-1 font-medium">
                    {exp.name}
                  </h4>
                  {exp.summary && (
                    <p className="text-gray-600 italic mt-1">{exp.summary}</p>
                  )}

                  {/* Highlights */}
                  {exp.highlights?.length > 0 && (
                    <ul className="list-disc list-inside mt-3 space-y-1 text-gray-700">
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
