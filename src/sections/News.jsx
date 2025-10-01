import React from "react";

// Example news items
const newsList = [
  {
     id: 1,
    date: "Jan 1, 2020",
    text: (
      <>
        First day of my undergraduate life at {" "} Islamic University of Technology (IUT) in Bangladesh.
      </>
    ),
  },
  {
    id: 2,
    date: "Oct 4, 2020",
    text: (
      <>
        Got Honorable mention as NASA Galactic Problem Solver for performance in{" "}
         <a
           href="https://www.spaceappschallenge.org/"
           target="_blank"
           rel="noopener noreferrer"
            >
           NASA Space Apps Challenge 2020. 
         </a>
      </>
    ),
  },
  {
    id: 3,
    date: "Jun 8, 2022",
    text: (
      <>
       Won HealthTech Category Award in <a href="https://bcolbd.org/" target="_blank" rel="noopener noreferrer">National Blockchain Olympiad 2022</a> for creating a blockchain based EHR platform.
      </>
    ),
  },
  {
    id: 4,
    date: "Sep 10, 2022",
    text: (
        <>
    Our team became Champion in Dhaka regional round in the <a href="https://iit.du.ac.bd/view_achievements/view_achievements_details/69" target="_blank" rel="noopener noreferrer">Robi BDapps, The National Hackathon 2022</a>.
          </>
    ),
  }

];

const News = () => {
    const sortedNews = [...newsList].sort((a, b) => b.id - a.id);
  return (
    <section id="news" className="max-w-6xl mx-auto px-4 py-8">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">News</h3>

      <div className="space-y-6">
        {sortedNews.map((news) => (
          <div key={news.id} className="flex flex-col md:flex-row md:items-start gap-2">
            {/* Date column */}
            <div className="md:w-28 flex-shrink-0">
              <span className="inline-block text-center bg-green-200 text-green-900 font-semibold text-sm py-1 px-2 rounded uppercase w-full shadow-md">
                {news.date}
              </span>
            </div>

            {/* Content column */}
            <div className="flex-1 text-gray-700 px-2">{news.text}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
