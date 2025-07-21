import React from "react";

const About = () => {
  return (
    <section
      className="bg-white/60 backdrop-blur-md px-6 py-16 relative z-10 text-gray-800"
      data-aos="fade-up"
    >
      <h2 className="text-4xl font-extrabold text-center text-blue-800 mb-10">
        About Me
      </h2>

      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 text-left text-lg leading-relaxed">
        {/* 🎓 Education */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">🎓 Education</h3>
          <ul className="list-disc list-inside space-y-2">
            <li>MCA – Pune University (2026)</li>
            <li>BCA – Sant Gadge Baba Amravati University (2024)</li>
            <li>HSC – Maharashtra State Board (2021)</li>
            <li>SSC – CBSE (2019)</li>
          </ul>
        </div>

        {/* 💡 Skills */}
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-blue-600">💡 Skillset</h3>
          <div className="flex flex-wrap gap-3 mt-2 text-base">
            {[
              "Java", "Spring Boot", "React", "HTML", "CSS", "JavaScript",
              "Tailwind", "MySQL", "MongoDB", "Python", "Git", "Firebase",
            ].map((skill, i) => (
              <span
                key={i}
                className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 text-blue-900 px-3 py-1 rounded-full font-medium shadow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ✨ Short Intro */}
      <div className="mt-12 max-w-3xl mx-auto text-center text-lg text-gray-700 leading-relaxed">
        <p>
          I'm a passionate full-stack developer who loves building elegant and
          impactful web applications. I enjoy learning new technologies and
          turning ideas into working software!
        </p>
      </div>
    </section>
  );
};

export default About;
