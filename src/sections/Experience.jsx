import React from "react";
import { FaLocationDot } from "react-icons/fa6";

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
  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 py-8">
      <div className="card bg-white shadow-md rounded-md p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Experience</h3>

        <ul className="space-y-6">
          {experiences.map((exp) => (
            <li key={exp.id} className="list-group-item border-b last:border-none pb-4">
              <div className="flex flex-col md:flex-row gap-4">
                {/* Left Column: Date + Location */}
                <div className="md:w-auto flex-shrink-0">
                  <span className="inline-block text-center bg-blue-200 text-blue-900 font-semibold text-sm py-1 px-3 rounded uppercase w-[120px]">
                    {formatDate(exp.startDate, exp.endDate)}
                  </span>
                  {exp.location && (
                    <p className="text-gray-600 mt-2 flex items-center gap-1 text-sm">
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
                  {exp.summary && <p className="text-gray-700 mb-2">{exp.summary}</p>}

                  {/* Highlights */}
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
