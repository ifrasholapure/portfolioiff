import { useState } from "react";
import axios from "axios";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [status, setStatus] = useState(""); // sending, success, error

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      // Post data to backend
      const response = await axios.post("http://localhost:5000/api/contact", formData);

      if (response.status === 200) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // reset form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus("error");
    }
  };

  return (
    <section className="contact-section">
      <div className="contact-card">
        <h1>Let’s Connect</h1>
        <p>Feel free to reach out for projects, internships, or collaborations.</p>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />

          <button type="submit">
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "success" && (
            <span className="success">✔ Message saved in MongoDB!</span>
          )}
          {status === "error" && (
            <span className="error">✖ Failed to save message</span>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;