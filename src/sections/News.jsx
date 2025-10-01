import React from "react";
import { newsList } from "../assets/data/news";


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
