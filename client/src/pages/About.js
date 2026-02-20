import "./About.css";

function About() {
  return (
    <section className="about">
      <div className="about-wrapper">

        {/* Header */}
        <div className="about-header">
          <h1>About Me</h1>
          <p>
            I’m <span>Ifra Sholapure</span>, a BCA student passionate about web
            development and continuous learning. I enjoy building real-world
            applications and improving my problem-solving skills.
          </p>
        </div>

        {/* Content */}
        <div className="about-content">

          {/* Timeline */}
          <div className="timeline">

            <div className="timeline-item">
              <span className="dot"></span>
              <div>
                <h3>Education</h3>
                <p>10th – Bensons English Medium High School (75%)</p>
                <p>PUC Science – St. Joseph's PU College</p>
                <p>BCA – KLE RLSI BCA College (2nd Year)</p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="dot"></span>
              <div>
                <h3>Coding Journey</h3>
                <p>
                  I started with HTML and CSS, then progressed to JavaScript,
                  React, Node.js, and MongoDB. I enjoy building responsive and
                  interactive applications.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="dot"></span>
              <div>
                <h3>Career Objective</h3>
                <p>
                  To grow as a Full Stack Developer and contribute to impactful,
                  efficient, and scalable software solutions.
                </p>
              </div>
            </div>

            <div className="timeline-item">
              <span className="dot"></span>
              <div>
                <h3>Achievements</h3>
                <p>• Built multiple full-stack web projects</p>
                <p>• Participated in coding workshops</p>
                <p>• Actively improving technical skills</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}

export default About;