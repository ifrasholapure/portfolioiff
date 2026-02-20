import "./About.css";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-card">
        <h1>About Me</h1>

        <p className="intro">
          I am <span>Ifra Sholapure</span>, a BCA student at KLE RLSI College. I love building web applications and learning new technologies.
        </p>

        <h2>Education</h2>
        <table className="education-table">
          <thead>
            <tr>
              <th>Year</th>
              <th>Institution</th>
              <th>Score/Percentage</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>10th</td>
              <td>Bensons English Medium High School</td>
              <td>75%</td>
            </tr>
            <tr>
              <td>PUC (Science)</td>
              <td>St. Joseph's PU College</td>
              <td>76%</td>
            </tr>
            <tr>
              <td>BCA 2nd Yr 4th Sem</td>
              <td>KLE RLSI BCA College</td>
              <td>Currently Learning</td>
            </tr>
          </tbody>
        </table>

        <h2>Career Objective</h2>
        <p>
          To become a skilled Full Stack Developer and contribute to impactful software projects. I started coding during my college years and have successfully completed 3 MERN stack projects, gaining hands-on experience in web development and modern technologies.
        </p>
      </div>
    </section>
  );
}

export default About;
