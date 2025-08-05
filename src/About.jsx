import React from "react";
import "./App.css"; // or About.css if you’re keeping styles separate

export default function About() {
  return (
    <div className="about-container">
      <h1>About Amaan</h1>

      <section className="about-section">
        <h2>📖 Our Story</h2>
        <p>
          Amaan was born from a vision — to bridge the gap between cutting-edge
          technology and timeless Islamic values. In a world where rapid
          innovation often overlooks ethics, we chose a different path:
          innovation **with integrity**.
        </p>
      </section>

      <section className="about-section">
        <h2>🤝 Our Mission</h2>
        <p>
          To create digital solutions that empower the Muslim community while
          upholding the core principles of Islam — honesty, trust, compassion,
          and justice.
        </p>
      </section>

      <section className="about-section">
        <h2>💚 Our Core Values</h2>
        <ul>
          <li>🕊️ Tawheed – Oneness in purpose, unified by faith</li>
          <li>🤲 Amanah – Trust in everything we build</li>
          <li>📚 Ilm – Knowledge, both sacred and scientific</li>
          <li>⚖️ Adl – Justice in code, contracts, and conduct</li>
          <li>🚀 Ihsan – Striving for excellence in every line of code</li>
        </ul>
      </section>

      <section className="about-section">
        <h2>🌟 Meet the Team</h2>
        <p>
          We're a diverse team of developers, designers, and dreamers — united
          by faith and fueled by purpose. From Kenya to the cloud, we work to
          build a digital world that respects both **deen and dunya**.
        </p>
      </section>

      <footer className="about-footer">
        <p>Want to build with us? Contact us and join the mission.</p>
      </footer>
    </div>
  );
}
