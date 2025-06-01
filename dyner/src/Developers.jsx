import { useState } from 'react';
import './developers.css';

export default function App() {
  const [activeTab, setActiveTab] = useState("All");

  const developers = [
    {
      id: 1,
      name: "Alex Johnson",
      title: "Full Stack Developer",
      description: "Experienced in React, Node.js, and AWS.",
      skills: ["React", "Node.js", "AWS"],
      availability: "Available",
      rating: 4.9,
    },
    {
      id: 2,
      name: "Sarah Chen",
      title: "UI/UX Designer",
      description: "Specializes in mobile UI and user research.",
      skills: ["UI/UX", "Figma", "Mobile"],
      availability: "In 2 weeks",
      rating: 4.8,
    },
  ];

  return (
    <div>
      <header className="header container">
      <a href="/" className="logo-link">
      <img src="/dyner-logo.png" alt="Dyner Logo" className="logo-img" />
    </a>
        <nav className="nav-links">
          <a href="/">Projects</a>
          <a href="/">Developers</a>
          <a href="/">How It Works</a>
        </nav>
      </header>

      <main className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '32px 0' }}>
          <h2>Developers</h2>
          <button className="button button-black">Join as Developer</button>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <input type="text" placeholder="Search developers..." style={{ padding: '8px', width: '60%' }} />
          <select style={{ marginLeft: '16px', padding: '8px' }}>
            <option>All Skills</option>
            <option>Frontend</option>
            <option>Backend</option>
          </select>
        </div>

        <div className="tabs">
          {["All", "Available Now", "Top Rated", "Recommended"].map(tab => (
            <button
              key={tab}
              className={activeTab === tab ? "active" : ""}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <div style={{ marginTop: '24px' }}>
          {developers.map(dev => (
            <div key={dev.id} className="card">
              <h3>{dev.name}</h3>
              <p><strong>{dev.title}</strong></p>
              <p>{dev.description}</p>
              <div>
                {dev.skills.map((skill, index) => (
                  <span key={index} className="tag">{skill}</span>
                ))}
              </div>
              <p>Availability: {dev.availability}</p>
              <p>Rating: {dev.rating}/5.0</p>
              <button className="button button-outline" style={{ marginTop: '8px' }}>
                View Profile
              </button>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer container">
        <p>© 2023 DevMatch. All rights reserved.</p>
      </footer>
    </div>
  );
}
