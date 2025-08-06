import React from "react";
import "./Contact.css"; // 👈 You'll create this for styles

export default function Contact() {
  return (
    <div className="contact-container">
      <h1 className="fade-in">Get in Touch</h1>
      <p className="slide-in">I'd love to connect with like-minded innovators, dreamers, and believers.</p>

      <div className="contact-info zoom-in">
        <p><strong>Email:</strong> <a href="mailto:halalh4x0r@gmail.com">halalh4x0r@gmail.com</a></p>
        <p><strong>GitHub:</strong> <a href="https://github.com/halalh4x0r" target="_blank" rel="noopener noreferrer">github.com/halalh4x0r</a></p>
      </div>

      <p className="fade-in delay">Let’s build something impactful — ethically, intelligently, and Islamically.</p>
    </div>
  );
}
