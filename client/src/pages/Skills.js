import "./Skills.css";

function Skills() {
  const technicalSkills = [
    "C", "Java", "Python", "DSA",
    "HTML", "CSS", "JavaScript",
    "React", "Node.js", "Express.js",
    "MongoDB", "Figma (UI/UX)", "Git", "REST APIs"
  ];

  const softSkills = [
    "Problem Solving", "Creative Thinking", "Logical Reasoning",
    "Team Collaboration", "Communication", "Adaptability",
    "Time Management", "Critical Thinking"
  ];

  return (
    <section className="skills-section">
      <div className="skills-container">
        <div className="skills-card">
          <h1 className="skills-title">Technical Skills</h1>
          <div className="skills-grid">
            {technicalSkills.map((skill, index) => (
              <div className="skill-chip" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div className="skills-card soft-skills">
          <h1 className="skills-title">Soft Skills</h1>
          <div className="skills-grid">
            {softSkills.map((skill, index) => (
              <div className="skill-chip" key={index}>
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;