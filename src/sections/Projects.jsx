import React from "react";

// Example projects data (you can fetch or import later)
const projects = [
  {
    id: 1,
    title: "AUTOHUB by IUT CARBON",
    importance: 1,
    description: "A centralized e-commerce platform connecting car owners with workshops for seamless auto repair and service management.",
    image: "src/assets/projects/autohub-project.png",
    url: "https://github.com/shadid-reza/AutoHub_IUT-CARBON",
  },
  {
    id: 2,
    title: "Portfolio Website",
    importance: 2,
    description: "A modern responsive portfolio built with React & Tailwind CSS.",
    image: "src/assets/projects/portfolio.png",
    url: "https://github.com/yourusername/portfolio-website",
  },
  {
    id: 3,
    title: "Data Dashboard",
    importance: 3,
    description: "An interactive analytics dashboard with real-time data.",
    image: "src/assets/projects/dashboard.png",
    url: "https://github.com/yourusername/data-dashboard",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 py-8">
      <div className=" p-4 rounded-md">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Projects</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {projects
            .sort((a, b) => a.importance - b.importance)
            .map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition hover:-translate-y-1 duration-200"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h4>
                  <p className="text-gray-700 text-sm">{project.description}</p>
                </div>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
