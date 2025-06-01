// 📁 Home.jsx
import { Link } from 'react-router-dom';
import './Home.css';

export default function Home() {
  return (
    <div className="home">
      <header className="header">
        <div className="container header-inner">
          <Link to="/" className="logo-link">
            <img src="/dyner-logo.png" alt="Dyner Logo" className="logo-img" />
          </Link>
          <nav className="nav">
            <Link to="/projects">Projects</Link>
            <Link to="/developers">Developers</Link>
            <Link to="/how-it-works">How It Works</Link>
          </nav>
          <div className="auth">
            <Link to="/sign-in" className="btn btn-outline">Sign In</Link>
            <Link to="/sign-up" className="btn btn-black">Sign Up</Link>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <div className="container hero-inner">
            <div className="hero-text">
              <h1>Find the perfect team for your development project</h1>
              <p>
                Connect with skilled developers, designers, and project managers who share your vision and can help bring your ideas to life.
              </p>
              <div className="hero-buttons">
                <Link to="/projects/create" className="btn btn-black">Post a Project →</Link>
                <Link to="/developers" className="btn btn-outline">Find Developers</Link>
              </div>
            </div>
            <div className="hero-card">
              <h3>Mobile App Development</h3>
              <p>Looking for React Native developers and UI/UX designers for a fitness tracking app.</p>
              <div className="tags">
                <span>React Native</span>
                <span>UI/UX Design</span>
                <span>Mobile</span>
              </div>
              <Link to="/projects/1" className="btn btn-outline small">View Details</Link>
            </div>
          </div>
        </section>

        <section className="how-it-works">
          <div className="container">
            <h2>How Dyner Works</h2>
            <p className="section-desc">
              Our platform makes it easy to find the right people for your development projects or join exciting teams.
            </p>
            <div className="features">
              <div className="feature-card">
                <h3>Post Your Project</h3>
                <p>
                  Describe your project, required skills, timeline, and compensation. Reach developers who match your needs.
                </p>
              </div>
              <div className="feature-card">
                <h3>Connect with Talent</h3>
                <p>
                  Browse profiles, review portfolios, and connect with developers who have the skills you need.
                </p>
              </div>
              <div className="feature-card">
                <h3>Build Together</h3>
                <p>
                  Collaborate effectively with tools and resources designed to help your team succeed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="featured-devs">
          <div className="container">
            <h2>Featured Developers</h2>
            <p className="section-desc">
              Connect with talented developers ready to join your next project.
            </p>
            <div className="dev-cards">
              {[1, 2, 3].map((id) => (
                <div key={id} className="dev-card">
                  <div className="avatar">{`Dev ${id}`}</div>
                  <h3>Developer {id}</h3>
                  <p className="desc">
                    {id === 1
                      ? "Full Stack Developer with 5 years of experience in React, Node.js, and AWS."
                      : id === 2
                      ? "UI/UX Designer specializing in mobile interfaces and user research."
                      : "Backend Developer with expertise in Python, Django, and database optimization."}
                  </p>
                  <div className="tags">
                    {id === 1 ? (
                      <>
                        <span>React</span><span>Node.js</span><span>AWS</span>
                      </>
                    ) : id === 2 ? (
                      <>
                        <span>UI/UX</span><span>Figma</span><span>Mobile</span>
                      </>
                    ) : (
                      <>
                        <span>Python</span><span>Django</span><span>SQL</span>
                      </>
                    )}
                  </div>
                  <Link to={`/developers/${id}`} className="btn btn-outline small">View Profile</Link>
                </div>
              ))}
            </div>
            <div className="centered">
              <Link to="/developers" className="btn btn-outline">View All Developers</Link>
            </div>
          </div>
        </section>

        <section className="cta">
          <div className="container cta-inner">
            <div className="cta-text">
              <h2>Ready to find your perfect team?</h2>
              <p>
                Join Dyner today and connect with talented developers who can help bring your project to life.
              </p>
              <Link to="/sign-up" className="btn btn-black">Get Started →</Link>
            </div>
            <div className="cta-card">
              <h3>Join as a Developer</h3>
              <p>Create your profile, showcase your skills, and get matched with exciting projects.</p>
              <Link to="/sign-up?role=developer" className="btn btn-outline small">Create Developer Profile</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <div className="logo">Dyner</div>
            <p>Connecting talented developers with exciting projects since 2023.</p>
          </div>
          <div className="footer-links">
  <div className="footer-column">
    <h4>Platform</h4>
    <ul>
      <li><Link to="/projects">Projects</Link></li>
      <li><Link to="/developers">Developers</Link></li>
      <li><Link to="/how-it-works">How It Works</Link></li>
    </ul>
  </div>
  <div className="footer-column">
    <h4>Company</h4>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/blog">Blog</Link></li>
      <li><Link to="/careers">Careers</Link></li>
    </ul>
  </div>
  <div className="footer-column">
    <h4>Legal</h4>
    <ul>
      <li><Link to="/privacy">Privacy</Link></li>
      <li><Link to="/terms">Terms</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </div>
</div>

        </div>
        <div className="container footer-bottom">
          <p>© 2023 Dyner. All rights reserved.</p>
          <div className="footer-policy">
            <Link to="#">Privacy Policy</Link>
            <Link to="#">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
