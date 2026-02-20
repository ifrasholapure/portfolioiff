import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I am <span>Ifra Sholapure</span></h1>
        <h2>Full Stack Developer | BCA Student</h2>
        <p>
          I build modern web applications using MERN stack and enjoy learning new technologies.
        </p>
        <div className="home-buttons">
          <a href="#about" className="btn primary">About Me</a>
          <a href="#projects" className="btn secondary">Projects</a>
        </div>
      </div>
    </section>
  );
}

export default Home;
