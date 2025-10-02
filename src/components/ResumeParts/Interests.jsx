import React from "react";

const Interests = () => {
  return (
    <section id="interests" className="max-w-6xl mx-auto px-4">
      <div className="card mt-6 p-6 bg-white shadow-md rounded-md">
        <h3 className="text-xl font-semibold mb-4">Other Interests</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Sports:</strong> Football, Badminton, Cricket, Table Tennis, Foosball</li>
          <li><strong>Hobbies:</strong> Video games, PC Building, Tech Podcasts, Traveling</li>
        </ul>
      </div>
    </section>
  );
};

export default Interests;
