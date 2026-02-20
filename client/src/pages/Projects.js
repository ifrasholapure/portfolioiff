import { motion } from "framer-motion";
import "./Projects.css";

// 🔴 IMPORT IMAGES (THIS IS REQUIRED)
import img1 from "../assets/image1.jpg";
import img2 from "../assets/image2.jpg";
import img3 from "../assets/image3.jpg";

const projects = [
  {
    name: "Restaurant Booking System",
    github: "https://github.com/ifrasholapure/restaurant-booking-system",
    description: "A web app to book tables at restaurants with user authentication.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    screenshot: img1
  },
  {
  name: "To-Do List App",
  github: "https://github.com/ifrasholapure/Task-Manage-App",
  description: "A simple and efficient To-Do List application that allows users to add, edit, delete, and mark tasks as completed for better daily task management.",
  tech: ["HTML", "CSS", "JavaScript", "React"],
  screenshot: img2
  },
  {
    name: "POSTAPP",
    github: "https://github.com/ifrasholapure/POSTAPP",
    description: "A MERN stack app to create posts and manage content.",
    tech: ["HTML", "CSS", "JavaScript", "React", "Node.js", "MongoDB"],
    screenshot: img3
  }
];

export default function Projects() {
  return (
    <section className="projects-section">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>

      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ y: -10 }}
          >
            <img
              src={project.screenshot}
              alt={project.name}
              className="project-screenshot"
            />

            <div className="project-info">
              <h3>{project.name}</h3>
              <p>{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((t, i) => (
                  <span key={i} className="tech-chip">{t}</span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}