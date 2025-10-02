import React from "react";

const AwardsAchievements = () => {
  const achievements = [
    {
      title: "International Blockchain Olympiad 2022",
      summary:
        "Bronze Award in SDG-3 (Good Health and Well Being) category for innovative Electronic Health Ledger platform.",
    },
    {
      title: "National Blockchain Olympiad 2022",
      summary:
        "Winner of the HealthTech category for developing a blockchain-based Electronic Health Records platform.",
    },
    {
      title: "UIU Blockchain Olympiad 2025",
      summary:
        "Bronze Award for creating a blockchain solution to combat wildlife trafficking.",
    },
    {
      title: "National Blockchain Olympiad 2024",
      summary:
        "Honorable Mention in BCOLBD 2024 for innovating a decentralized system for the Road and Transport Authority.",
    },
    {
      title: "ML Olympiad 2024: CO2 Emissions Prediction Challenge",
      summary:
        "Ranked 6th among 70+ teams by forecasting CO2 emissions per capita using time series data.",
    },
    {
      title: "Bhashamul: Bengali Regional IPA Transcription 2024",
      summary:
        "Finalist for contributions to accurate IPA transcription of Bengali dialects.",
    },
    {
      title: "BDApps National Hackathon 2022",
      summary:
        "Champion in Dhaka regional round for innovative app development solutions.",
    },
    {
      title: "CodeRush 1.0 Intra-IUT CTF Challenge 2023",
      summary:
        "Secured a top 10 position in the competitive CTF challenge.",
    },
    {
      title: "NASA SpaceApps Challenge 2020",
      summary:
        "Received Honorable Mention as a NASA Galactic Problem Solver for performance in the challenge.",
    },
  ];

  return (
    <section id="achievements" className="max-w-6xl mx-auto px-4 py-4">
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
