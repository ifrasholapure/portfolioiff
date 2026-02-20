import "./Home.css";
import profilePic from "../assets/image4.jpg";

function Home() {
  return (
    <section className="home">
      <div className="home-container">

        {/* Profile Section */}
        <div className="profile-card">
          <img
            src={profilePic}
            alt="Ifra Sholapure"
            className="profile-pic"
          />
        </div>

        {/* Intro Section */}
        <div className="intro-card">
          <h1>
            Hello, I’m <span>Ifra </span>
          </h1>

          <h2>Aspiring Full Stack Developer | BCA Student</h2>

          <p className="dev-statement">
            I enjoy turning ideas and complex problems into clean, user-friendly
            web experiences. I focus on writing readable code and growing
            consistently as a developer.
          </p>

          <div className="drives-me">
            <h3>What drives me</h3>
            <ul>
              <li>🌱 Continuous learning</li>
              <li>🧩 Solving real-world problems</li>
              <li>✨ Creating meaningful digital experiences</li>
            </ul>
          </div>

          <div className="future-vision">
            <h3>Looking Ahead</h3>
            <p>
              My goal is to contribute to impactful software products while
              developing strong full-stack and problem-solving skills.
            </p>
          </div>

          <p className="availability">
            📌 Open to internships, collaborations, and entry-level opportunities
          </p>
        </div>

      </div>
    </section>
  );
}

export default Home;