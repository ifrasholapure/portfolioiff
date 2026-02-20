import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3 className="footer-title">Let’s Connect</h3>

        <div className="footer-links">
          <a
            href="https://github.com/ifrasholapure"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/ifra-sholapure-911336337"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>

        <p className="footer-copy">
          © 2026 Ifra Sholapure. All rights reserved.
        </p>
      </div>
    </footer>
  );
}