import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-4">
      <div className="card mt-6 p-6 bg-white shadow-md rounded-md">
        <h3 className="text-xl font-semibold mb-4">Skills</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Languages:</strong> C, C++, C#, Python, Java, JavaScript, LaTeX, SQL, HTML, CSS, Assembly, Solidity
          </li>
          <li>
            <strong>Libraries and Frameworks:</strong> ASP.NET Core, Blazor, Hyperledger Fabric, Node.js, React.js, Express.js, TensorFlow, PyTorch, Tailwind CSS, Hardhat
          </li>
          <li>
            <strong>Development Tools:</strong> Microsoft SQL Server, Microsoft Azure, Git, Linux/UNIX, MySQL, MongoDB, Blender, Jira, Docker, Figma, Remix IDE
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
