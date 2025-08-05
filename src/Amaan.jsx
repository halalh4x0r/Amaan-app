import React from "react";
import "./App.css"; // Adjust if you’re using a different CSS file

export default function Amaan() {
  return (
    <div className="amaan-container">

      <section className="amaan-section">
        <h2>🔍 Who We Are</h2>
        <p>
          Amaan is a tech-driven company dedicated to building ethical,
          innovative solutions rooted in Islamic values. We believe in
          harnessing the power of modern technology to uplift communities,
          empower individuals, and deliver tools that align with faith and
          purpose.
        </p>
      </section>

      <section className="amaan-section">
        <h2>💡 What We Do</h2>
        <ul>
          <li>📱 Build halal-friendly digital apps</li>
          <li>🔐 Develop cybersecurity solutions for Islamic institutions</li>
          <li>💼 Create finance tools based on Islamic contracts (Wakala, Bai Salam, etc.)</li>
          <li>🧠 Educate and empower Muslim techies and entrepreneurs</li>
          <li>And soon Building tech tools and machines to improve tech</li>
        </ul>
      </section>

      <section className="amaan-section">
        <h2>🌍 Our Vision</h2>
        <p>
          To become the leading hub where Islamic principles guide technological
          excellence. We aim to inspire a world where innovation strengthens
          faith, not contradicts it.
        </p>
      </section>

      <footer className="amaan-footer">
        <p>© {new Date().getFullYear()} Amaan Technologies. Built with Barakah.</p>
      </footer>
    </div>
  );
}
