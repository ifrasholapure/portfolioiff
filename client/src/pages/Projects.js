import { motion } from "framer-motion";
import "./Projects.css";

const projects = [
  {
    name: "Restaurant Booking System",
    github: "https://github.com/ifrasholapure/restaurant-booking-system",
    description: "Web app to book tables with authentication.",
    image: "/images/project1.png",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    name: "Task Manage App",
    github: "https://github.com/ifrasholapure/Task-Manage-App",
    description: "Manage tasks: create, edit, delete tasks.",
   image: "/images/project2.png",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    name: "POSTAPP",
    github: "https://github.com/ifrasholapure/POSTAPP",
    description: "MERN stack app to create posts and manage content.",
    image: "/images/project3.png",
    tech: ["React", "Node.js", "MongoDB"]
  }
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My Projects
      </motion.h1>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            whileHover={{ y: -10 }}
          >
            <img src={project.image} alt={project.name} className="project-img"/>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="tech-used">
              {project.tech.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
