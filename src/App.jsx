import React from "react";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./index.css";
import About from "./components/About";

function App() {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-200 text-gray-800 overflow-hidden font-sans">
      {/* 🔧 Floating Emojis Background */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-10 text-6xl animate-pulse">
        <div className="absolute top-10 left-5">💻</div>
        <div className="absolute top-1/3 right-10 rotate-12">⚙️</div>
        <div className="absolute bottom-20 left-20">☁️</div>
        <div className="absolute bottom-10 right-10 rotate-[-12deg]">🖥️</div>
        <div className="absolute top-1/2 left-1/3 rotate-6">🧠</div>
        <div className="absolute top-1/4 right-1/3 scale-110">🔧</div>
      </div>

      {/* 🛠 Background SVGs */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <img
          src="https://www.svgrepo.com/show/353985/developer.svg"
          alt="code icon"
          className="absolute top-10 left-5 w-52 rotate-12"
        />
        <img
          src="https://www.svgrepo.com/show/353982/developer.svg"
          alt="dev icon"
          className="absolute bottom-10 right-10 w-60 rotate-[-6deg]"
        />
      </div>

      {/* 👩‍💻 Hero Section */}
      <section className="text-center py-20 px-4">
        <div className="mx-auto w-32 h-32 rounded-full overflow-hidden border-4 border-blue-800 shadow-lg animate__animated  animate__infinite">
          <img
            src="assets/neha.jpeg"
            alt="Neha"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="mt-8 text-5xl md:text-6xl font-extrabold text-blue-700 animate__animated animate__fadeInUp">
          Hi, I'm Neha Chikhale 👋
        </h1>
        <p className="mt-4 text-xl md:text-2xl text-gray-700 font-medium">
          Full Stack Developer | Java | React | Python | SQL
        </p>
      </section>

      {/* 👤 About Me Section */}
      <About />

      {/* 📁 Projects */}
      <Projects />

      {/* 📬 Contact */}
      <Contact />

      {/* 🔚 Footer */}
      <footer className="bg-gray-100 text-center text-sm p-4 mt-8">
        © 2025 Neha | Built with ❤️ using React & Tailwind CSS
      </footer>
    </div>
  );
}

export default App;
