import React from "react";

const AwardsAchievements = () => {
  const achievements = [
    {
      title: "Best Developer Award",
      summary:
        "Recognized for outstanding contribution to the development of internal tools and automation systems.",
    },
    {
      title: "Employee of the Month",
      summary:
        "Awarded for exceptional teamwork and delivering key features ahead of schedule.",
    },
    {
      title: "Hackathon Winner",
      summary:
        "Won 1st place in company-wide hackathon by building an AI-powered analytics dashboard.",
    },
  ];

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
        Awards & Achievements
      </h2>
      <ul className="space-y-3">
        {achievements.map((item, index) => (
          <li key={index} className="flex items-start gap-3">
            <span className="mt-2 w-2 h-2 bg-gray-800 rounded-full"></span>
            <div>
              <h6 className="font-semibold">{item.title}</h6>
              <p className="text-gray-600 text-sm">{item.summary}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default AwardsAchievements;
