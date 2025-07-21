import React from "react";

const projects = [
  {
    title: "Trip Planner",
    description: "Android app for planning travel itineraries with maps and booking.",
    technologies: ["Android Studio", "XML", "Java", "MySQL", "XAMP"],
  },
  {
    title: "Life Share",
    description: "A web based blood donor and receiver management system platform.",
    technologies: ["HTML", "CSS", "PHP", "Spring Boot", "XAMP", "MySQL"],
  },
  {
    title: "Chat-Nova",
    description: "A React based Simple text based Chatting Platform",
    technologies: ["React", "Node.js", "Javascript", "MongoDB"],
  },
];

export default function Projects() {
  return (
    <section className="bg-gray-100 px-6 py-10" id="projects">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-blue-800">🚀 Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 transform hover:scale-105"
            data-aos="fade-up"
            data-aos-delay={index * 200}
            data-aos-duration="800"
          >
            <h5 className="text-lg font-extrabold text-blue-700 mb-4">{project.title}</h5>
            <p className="text-gray-800 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-blue-900 text-xs px-3 py-1 rounded-full font-medium shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
